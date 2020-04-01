//Mostrar quem usa tecnologia CSS.

const usuarios = [
  {nome : 'Carlos',tecnologias : ['HTML' , 'CSS']},
  {nome : 'Jasmine', tecnologias : ['JavaScript', 'CSS']},
  {nome : 'Tuane' , tecnologias : ['HTML' , 'Node.js']}
]

function checaSeUsuarioUsaCSS(usuario) {
  
  for (let i=0; i < usuario.length; i++) { //percorre a linha de usuarios
    for(let j=0; j < usuario[i].tecnologias.length; j++){ //percorre colunas de tecnologias
    
      if (usuario[i].tecnologias[j]=='CSS') {
        console.log(`usuario ${usuario[i].nome} usa CSS`)
        }
    }
  }
}

checaSeUsuarioUsaCSS(usuarios)


