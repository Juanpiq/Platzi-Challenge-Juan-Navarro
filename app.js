// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//desafío de Juan Pablo Navarro Quintero

function agregarAmigo(){
    document.getElementById('resultado').innerHTML = ""; //elimino el mensaje del resultado si existe
    let listaAmigos = document.getElementById('listaAmigos'); //obtengo la dirección de la lista ubicada en el dom
    let nameAmigo = document.getElementById('amigo'); //obtengo la dirección del input del dom
    if(nameAmigo.value.length == 0){
        alert('Ingresa un nombre')
    } else {
        let newName = nameAmigo.value; //obtengo en una variable el valor de la cadena insertada en el  input
        let newChild = document.createElement('li'); //creo un elemento li
        newChild.innerHTML = newName; //le agrego a ese child el nombre insertado
        listaAmigos.appendChild(newChild); //añado el elemento li creado a la lista
        nameAmigo.value = "" //borro el contenido del input
    }
}

function sortearAmigo(){
    let lista = Array.from(listaAmigos.children).map(el => el.innerHTML) //añado todas las cadenas de los append childs
    console.log(lista);
    let num = Math.trunc(Math.random() * lista.length); //ejecuto un numero random
    console.log(num);
    console.log(lista[num]);
    let mensaje = `El amigo secreto sorteado es: ${lista[num]}`; //genero el mensaje de la persona ganadora
    document.getElementById('amigo').value = ""; //borro el contenido del input en el dom
    while (listaAmigos.firstChild) { //elimino en este while cada uno de los childs de la lista
        listaAmigos.removeChild(listaAmigos.firstChild);
    }

    let res = document.getElementById('resultado'); //obtengo la direccion en el dom donde se insertará el mensaje ganador
    res.innerHTML = mensaje; //adiciono el mensaje ganador
    
}