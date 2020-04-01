//Criar programa que calcula a média
//das TURMAS de alunos entre os alunos e envia
//mensagem do cálculo da média

// const nomeExemplo = `Valesca e ${nome1}` template string, colocar váriavel dentro.


const alunosTurmaA = [
    {
        nome: "Thiago",
        nota: 10
    },
    {
        nome: "Diego",
        nota: 9.8
    },
    {
        nome:"Fulano",
        nota: 2
    }
]

const alunosTurmaB = [
    {
        nome: "Cleiton",
        nota: 10
    },
    {
        nome: "Lucas",
        nota: 2
    },
    {
        nome:"Siclano",
        nota: 2
    },
    {
        nome: "Alguém",
        nota: 5.5
    }
]

function CalculaMedia(alunos){
    let somaNota = 0;
    for (let i=0; i < alunos.length; i++){
        somaNota = (somaNota + alunos[i].nota);
    }
    return media = somaNota / alunos.length;
}

const mediaTurmaA = CalculaMedia(alunosTurmaA)
const mediaTurmaB = CalculaMedia(alunosTurmaB)

function enviaMensagem (media, turma){
    //se média maior que 5 parabenizar a turma
    if (media > 5){
        console.log(`A média da turma ${turma} foi ${media}, Parabéns!`)
    }
    else{
    console.log(`A média da turma ${turma} foi ${media}, estude mais!`)
    } 
}

enviaMensagem (mediaTurmaA, "A")
enviaMensagem (mediaTurmaB, "B")