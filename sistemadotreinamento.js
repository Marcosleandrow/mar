/**O sistema precisa permitir que:
- O cadastro de pessoas, com nome e sobrenome;
- O cadastro das salas do evento, com nome e lotação;
- O cadastro dos espaços de café pelo nome;

A diferença de pessoas em cada sala deverá ser de no máximo 1 pessoa. 
Para estimular a troca de conhecimentos, 
metade das pessoas precisam trocar de sala entre as duas etapas do treinamento.
Ao consultar uma pessoa cadastrada no treinamento, 
o sistema deverá retornar à sala em que a pessoa ficará em cada etapa 
e o espaço onde ela realizará cada intervalo de café.
Ao consultar uma sala cadastrada ou um espaço de café, 
o sistema deverá retornar uma lista das pessoas que 
estarão naquela sala ou espaço em cada etapa do evento.

Requisitos obrigatórios:
Crie uma interface que permita:
- O cadastro de pessoas, com nome e sobrenome;
- O cadastro das salas do evento, com nome e lotação;
- O cadastro dos espaços de café com lotação;
- A consulta de cada pessoa;
- A consulta de cada sala e espaço; */

let interacao = require("readline-sync")

alunos = 1
let sala1 = {
    nome: "",
    lotacao: "",
    pessoas: [],
    pessoas_Etapa2: []
}
let sala2 = {
    nome: "",
    lotacao: "",
    pessoas: [],
    pessoas_Etapa2: []
}
let cafe1 = {
    nome: "",
    lotacao: "",
    pessoas_Cafe1: [],
    pessoas_Cafe1_Etapa2: []
}
let cafe2 = {
    nome: "",
    lotacao: "",
    pessoas_Cafe2: [],
    pessoas_Cafe2_Etapa2: []
}
//Cadastro da sala 1
sala1.nome = interacao.question("\nDigite o nome da sala 1: ")
sala1.lotacao = interacao.questionInt(`Informe a lotacao da ${sala1.nome}: `)

//Cadastro da sala 2
sala2.nome = interacao.question("\nDigite o nome da sala 2: ")
sala2.lotacao = interacao.questionInt(`Informe a lotacao da ${sala2.nome}: `)

//Cadastrar alunos da sala 1
console.log(`\nCadastre os alunos da sala ${sala1.nome}`)
while (sala1.pessoas.length < sala1.lotacao) {
    sala1.pessoas.push(interacao.question(`Infome o nome e sobrenome do aluno ${alunos}: `))
    alunos++
}

//Cadastrar alunos da sala 2
alunos = 1
console.log(`\nCadastre os alunos da sala ${sala2.nome}`)
while (sala2.pessoas.length < sala2.lotacao) {
    sala2.pessoas.push(interacao.question(`Infome o nome e sobrenome do aluno ${alunos}: `))
    alunos++
}

//Cadastro do cafe 1
cafe1.nome = interacao.question("\nDigite o nome do cafe 1: ")
cafe1.lotacao = sala1.lotacao

//Cadastro do cafe 2 
cafe2.nome = interacao.question("\nDigite o nome do cafe 2: ")
cafe2.lotacao = sala1.lotacao

//Espaço de café que as pessoas vão usar na primeira etapa
cafe1.pessoas_Cafe1 = sala1.pessoas
cafe2.pessoas_Cafe2 = sala2.pessoas

//consultar uma sala ou um espaço de café da primeira etapa
console.log("\nConsultar sala ou espaco de cafe da primeira etapa")
let continuar = interacao.questionInt(`Digite 0 se quiser fazer uma pesquisa, ou digite outro valor se quiser continuar o programa `)
while (continuar == 0) {
    let pesquisa = interacao.question(`\nDeseja pesquisar por qual sala ou espaco de cafe da primeira etapa?\nDigite o nome da sala ou espaco de cafe: `)

    if (pesquisa == sala1.nome) {
        console.log(`\nLista das pessoas da sala: ${sala1.nome}: ${sala1.pessoas}`)
    } else if (pesquisa == sala2.nome) {
        console.log(`\nLista das pessoas da sala: ${sala2.nome}: ${sala2.pessoas}`)
    }
    if (pesquisa == cafe1.nome) {
        console.log(`\nLista das pessoas do espaco de cafe: ${cafe1.nome}: ${cafe1.pessoas_Cafe1}`)
    } if (pesquisa == cafe2.nome) {
        console.log(`\nLista das pessoas do espaco de cafe: ${cafe2.nome}: ${cafe2.pessoas_Cafe2}`)
    }

    continuar = interacao.questionInt(`\nDigite 0 se quiser fazer uma nova pesquisa, ou digite outro valor se quiser continuar o programa  `)
}

//Troca de sala entre as etapas
let ex1, ex2, ex3, ex4, etapa2_Sala1_1 = [], etapa2_Sala2_2 = []
let etapa2_Sala1 = [], etapa2_Sala2 = []

//Troca de sala entre as etapas, se lotação da sala divisivel por 2
if (sala1.lotacao % 2 == 0 && sala2.lotacao % 2 == 0) {
    etapa2_Sala1 = sala1.pessoas.slice(sala1.lotacao / 2)
    etapa2_Sala2 = sala2.pessoas.slice(sala2.lotacao / 2)
    sala1.pessoas_Etapa2 = (`${etapa2_Sala1},${etapa2_Sala2}`)
    ex3 = 0
    ex4 = 0
    ex1 = sala1.lotacao / 2
    ex2 = sala2.lotacao / 2
    while (ex3 < ex1) {
        etapa2_Sala1_1.push(sala1.pessoas[ex3])
        ex3++
    }
    while (ex4 < ex2) {
        etapa2_Sala2_2.push(sala2.pessoas[ex4])
        ex4++
    }
}

//Troca de sala entre as etapas, se lotação da sala impar e igual
else if (sala1.lotacao == sala2.lotacao) {
    etapa2_Sala1 = sala1.pessoas.slice((sala1.lotacao / 2))
    etapa2_Sala2 = sala2.pessoas.slice((sala2.lotacao / 2) + 1)
    sala1.pessoas_Etapa2 = (`${etapa2_Sala1},${etapa2_Sala2}`)
    ex3 = 0
    ex4 = 0
    ex1 = (sala1.lotacao / sala1.lotacao)
    ex2 = (sala2.lotacao / sala1.lotacao)
    while (ex3 < (ex1)) {
        etapa2_Sala1_1.push(sala1.pessoas[ex3])
        ex3++
    }
    while (ex4 <= ex2) {
        etapa2_Sala2_2.push(sala2.pessoas[ex4])
        ex4++
    }
}

//Troca de sala entre as etapas, se lotação da sala diferente
else if (sala1.lotacao != sala2.lotacao) {
    etapa2_Sala1 = sala1.pessoas.slice(sala1.lotacao / 2)
    etapa2_Sala2 = sala2.pessoas.slice((sala2.lotacao / 2))
    sala1.pessoas_Etapa2 = (`${etapa2_Sala1},${etapa2_Sala2}`)
    ex3 = 0
    ex4 = 0
    ex1 = (sala1.lotacao / sala2.lotacao)
    ex2 = (sala2.lotacao / sala1.lotacao)
    while (ex3 < (ex1)) {
        etapa2_Sala1_1.push(sala1.pessoas[ex3])
        ex3++
    }
    while (ex4 <= ex2) {
        etapa2_Sala2_2.push(sala2.pessoas[ex4])
        ex4++
    }
}
sala2.pessoas_Etapa2 = (`${etapa2_Sala1_1},${etapa2_Sala2_2}`)

//Espaço de café que as pessoas vão usar na segunda etapa tipo tenho que fazer isso no primero da certo
cafe1.pessoas_Cafe1_Etapa2 = sala1.pessoas_Etapa2
cafe2.pessoas_Cafe2_Etapa2 = sala2.pessoas_Etapa2

//consultar uma sala ou um espaço de café da segunda etapa 
console.log("\nConsultar sala ou espaco de cafe da segunda etapa")
let continuar2 = interacao.questionInt(`Digite 0 se quiser fazer uma pesquisa, ou digite outro valor se quiser continuar o programa `)
while (continuar2 == 0) {
    let pesquisa2 = interacao.question(`\nDeseja pesquisar por qual sala ou espaco de cafe da segunda etapa?\nDigite o nome da sala ou espaco de cafe: `)

    if (pesquisa2 == sala1.nome) {
        console.log(`\nLista das pessoas da sala: ${sala1.nome}: ${sala1.pessoas_Etapa2}`)
    } else if (pesquisa2 == sala2.nome) {
        console.log(`\nLista das pessoas da sala: ${sala2.nome}: ${sala2.pessoas_Etapa2}`)
    }
    if (pesquisa2 == cafe1.nome) {
        console.log(`\nLista das pessoas do espaco de cafe: ${cafe1.nome}: ${cafe1.pessoas_Cafe1_Etapa2}`)
    } if (pesquisa2 == cafe2.nome) {
        console.log(`\nLista das pessoas do espaco de cafe: ${cafe2.nome}: ${cafe2.pessoas_Cafe2_Etapa2}`)
    }

    continuar2 = interacao.questionInt(`\nDigite 0 se quiser fazer uma nova pesquisa, ou digite outro valor se quiser continuar o programa  `)
}

//consultar uma pessoa cadastrada no treinamento na primeira etapa 
console.log("\nConsultar uma pessoa cadastrada no treinamento na primeira etapa ")
let continuar3 = interacao.questionInt(`Digite 0 se quiser fazer uma pesquisa, ou digite outro valor se quiser continuar o programa `)
while (continuar3 == 0) {
    let consulta = interacao.question("\nDigite o nome a ser pesquisado: ")
    let numero = sala1.pessoas.indexOf(consulta)

    if (consulta == sala1.pessoas[numero]) {
        console.log(`\nNome do aluno: ${sala1.pessoas[numero]}\nSala: ${sala1.nome}\nEspaco de cafe: ${cafe1.nome}`)
    }
    else if (numero == -1) {
        numero = sala2.pessoas.indexOf(consulta)
        console.log(`\nNome do aluno: ${sala2.pessoas[numero]}\nSala: ${sala2.nome}\nEspaco de cafe: ${cafe2.nome}`)
    } else {
        console.log("\nNome nao encontrado!")
    }
    continuar3 = interacao.questionInt(`\nDigite 0 se quiser fazer uma nova pesquisa, ou digite outro valor se quiser continuar o programa  `)
}

//consultar uma pessoa cadastrada no treinamento na segunda etapa 
console.log("\nConsultar uma pessoa cadastrada no treinamento na segunda etapa ")
let continuar4 = interacao.questionInt(`Digite 0 se quiser fazer uma pesquisa, ou digite outro valor se quiser continuar o programa `)
while (continuar4 == 0) {
    let consulta2 = interacao.question("\nDigite o nome a ser pesquisado: ")
    let numero2 = sala1.pessoas_Etapa2.indexOf(consulta2)
    console.log("numero 2 = " + numero2)

    if (consulta2 == sala1.pessoas_Etapa2[numero2]) {
        console.log(`\nNome do aluno: ${sala1.pessoas_Etapa2[numero2]}\nSala: ${sala1.nome}\nEspaco de cafe: ${cafe1.nome}`)
    }
    else if (numero2 == 0) {
        numero2 = sala2.pessoas_Etapa2.indexOf(consulta2)
        console.log(`\nNome do aluno: ${sala2.pessoas_Etapa2[numero2]}\nSala: ${sala2.nome}\nEspaco de cafe: ${cafe2.nome}`)
    } else {
        console.log("\nNome nao encontrado!")
    }
    continuar4 = interacao.questionInt(`\nDigite 0 se quiser fazer uma nova pesquisa, ou digite outro valor se quiser continuar o programa  `)
}

//Agradecimento
console.log("\nFim do Programa! \nObrigado por utilizar nosso programa.")