const user =  {
    name: 'Mariana',
    transactions: [],
    balance: 0 //saldo
}

function createTransaction (transation){
    let soma = 0
    if(transation.type == 'credit'){
        soma = user.balance + transation.value
    }else{
        soma = user.balance - transation.value
    }
    user.balance = soma
    user.transactions.push(transation)
}

function getHigherTransactionByType(type) {
    let higherValue = 0
    for (transaction of user.transactions) {
        if (transaction.type == type && transaction.value > higherValue) {
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }
    return higherTransaction
}

function getAverageTransactionValue(user){ // valor médio das transações
    let soma = 0
    valorMedio = 0
    let i = 0
    for(transaction of user.transactions){
        soma = soma + transaction.value
        i++
    }
    return valorMedio = soma / i
}

function getTransactionsCount(user){
    somaCredit = 0
    somaDebit = 0
    for(transaction of user.transactions){
        if(transaction.type == 'credit'){
            somaCredit++
        }else{
            somaDebit++
        }
    }
    return {credit: somaCredit, debit: somaDebit}
}
//console.log (getHigherTransactionByType('credit'))
//console.log (getAverageTransactionValue(user))
//console.log (getTransactionsCount(user))

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

console.log (getHigherTransactionByType("credit")) // { type: 'credit', value: 120 }
console.log (getHigherTransactionByType("debit")) // { type: 'debit', value: 80 }

console.log (getAverageTransactionValue(user)) // 70

console.log (getTransactionsCount(user)) // { credit: 2, debit: 2 }