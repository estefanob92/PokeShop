const contenedorItems = document.querySelector('.itemList');
console.log(contenedorItems)


function fetchItem(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => { 
        createItem(data);
    })
}


function fetchItemS(number){
    for(let i = 1; i <= number; i++){
        fetchItem(i)
    }
}


function createItem(item){
    const contenedorItem = document.createElement('div');
    contenedorItem.classList.add('contenedorItem');
    contenedorItem.classList.add('rounded');

    /* const contenedorImagen = document.createElement('div');
    contenedorImagen.classList.add('contenedorImagen');

    const imagenItem = document.createElement('img');
    imagenItem.src = item.sprites.front_default;
 
    contenedorImagen.appendChild(imagenItem)  */
    
    const imagen = document.createElement('img');
    imagen.classList.add('imagenItem');

    const sprite = item.sprites.front_default;

    imagen.setAttribute('src', sprite)
    

    const numeroItem = document.createElement('p')
    numeroItem.textContent = `# ${item.id}`;

    const nombreItem = document.createElement('p');
    nombreItem.classList.add('nombreItem');
    nombreItem.textContent = item.name;

    /* contenedorItem.appendChild(contenedorImagen); */
    contenedorItem.appendChild(numeroItem);
    contenedorItem.appendChild(imagen);
    contenedorItem.appendChild(nombreItem);

    contenedorItems.appendChild(contenedorItem)
}



fetchItemS(20);  

