const usuarios = [
    {
    nome: 'Salvio',
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
    },
    {
    nome: 'Marcio',
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
    },
    {
    nome: 'Lucia',
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
    }
]

function somaNumeros(numeros) {
    // Soma todos números dentro do array "numeros"
    let soma = 0
    for(let i = 0; i < numeros.length; i++){
        soma = soma + numeros[i]
        
    }
    return soma
}

//Percorra o array de usuários e para cada usuário chame uma função chamada 
//calculaSaldo que recebe como parâmetro as receitas e despesas do usuário:
function calculaSaldo(receitas, despesas) {
    for(i=0; i < usuarios.length; i++ ){
        receitasUsuario = somaNumeros(usuarios[i].receitas)
        despesasUsuario = somaNumeros(usuarios[i].despesas)
        somaSaldo = receitasUsuario - despesasUsuario

        if (somaSaldo > 0){
            console.log(`${usuarios[i].nome} possui saldo POSITIVO de ${somaSaldo}`)

        }else{
            console.log(`${usuarios[i].nome} possui saldo NEGATIVO de ${somaSaldo}`)
        }
    }

}

calculaSaldo(usuarios.receitas,usuarios.despesas)