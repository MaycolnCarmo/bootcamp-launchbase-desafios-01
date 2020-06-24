// -----------Operações Bancárias

const user = { 
    name: "Mariana",
    transactions:[],
    balance: 0
}

// Adicionar transações
function createTransaction(transaction){
    user.transactions.push(transaction)

    if (transaction.type == 'credit') {
        user.balance = user.balance + transaction.value
    } else {
        user.balance = user.balance - transaction.value
    }
}

// Relatórios
function getHigherTransactionByType(types) {
    let higherValue = 0
    for(let i = 0; i < user.transactions.length; i++){
        if (user.transactions[i].type == types) {
            if (user.transactions[i].value > higherValue) {
                higherValue = user.transactions[i].value
            }
        }
    }
    console.log(`type: ${types}, value: ${higherValue}`)
}

function getAverageTransactionValue(transactions){
    let total = 0
    for (let transaction of transactions) {
        total = total + transaction.value
    }

    console.log(total/transactions.length)
}

function getTransactionsCount(transactions) {
    let countDebit = 0
    let countCredit = 0
    for (let transaction of transactions) {
        if (transaction.type == "credit"){
            countCredit ++
        } else {
            countDebit ++
        }
    }
    console.log(`credit: ${countCredit}, debit: ${countDebit}`)
}

createTransaction({ type: "credit", value: 50 })
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance)

getHigherTransactionByType("credit")
getHigherTransactionByType("debit")

getAverageTransactionValue(user.transactions)

getTransactionsCount(user.transactions)