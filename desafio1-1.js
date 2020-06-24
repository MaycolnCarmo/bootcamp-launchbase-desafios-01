// ---- Desafio IMC -----
const nome1 = "Carlos"
const peso = 130
const altura = 1.88

const imc = peso / (altura * altura)

if (imc >=30 ) {
    console.log(`${nome1} você está acima do peso`)
} else {
    console.log(`${nome1}, você não está acima do peso`)
}

// ------- Cálculo de aposentadoria ----------


const nome2 = "Silvana"
const sexo = "F"
const idade = 58
const contribuicao = 33
const fatorTotal = idade + contribuicao


    if (sexo == "F") {
        if(fatorTotal >= 85) {
            console.log(`${nome2}, você pode se aposentar!`)
        } else {
            console.log(`${nome2}, você ainda não pode se aposentar!`)
        }
    } else {
        if(fatorTotal >= 95) {
            console.log(`${nome2}, você pode se aposentar!`)
        } else {
            console.log(`${nome2}, você ainda não pode se aposentar!`)
        }
    }

