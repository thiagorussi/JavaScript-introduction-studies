//Criar programa que calcula a média
//das notas entre os alunos e envia
//mensagem do cálculo da média

// const nomeExemplo = `Valesca e ${nome1}` template string, colocar váriavel dentro.


const aluno1 = "Thiago";
const notaAluno01 = 9.8;

const aluno2 = 'Diego';
const notaAluno02 = 2;

const aluno03 = 'Fulano'
const notaALuno03 = 2;

const media = (notaAluno01 + notaAluno02 + notaALuno03) / 3
console.log(media);

//se média maior que 5 parabenizar a turma

if (media > 5){
    console.log(`A média foi ${media}, Parabéns!`)
}
else{
    console.log(`A média foi ${media}, estude mais!`)
} 