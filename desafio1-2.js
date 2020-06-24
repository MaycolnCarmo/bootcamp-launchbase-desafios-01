// --------------Construção e impressão de objetos

const empresa = {
    nome: "Rocketseat",
    cor: "Roxo",
    Foco: "Programação",
    endereco: {
        rua: "Rua Guilherme Gembala",
        numero: 260
    }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}`)

// ------------Vetores e objetos

const programador = {
    nome: "Carlos",
    idade: 38,
    tecnologias: [
        {
            nome: "C++",
            especialidade: "Desktop"
        },
        {
            nome: "Python",
            especialidade: 'Data Science',
        }, 
        {
            nome: 'Javascript',
            especialidade: 'Web/Mobile',
        }
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade} `)