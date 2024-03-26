import data from './json.js'

const dinoIndex = document.getElementById('dino-index')

function newDinosaurInIndex({id, name, imageSrc, foundIn, diet}){
    let newDino = document.createElement('li')
    newDino.classList.add('dino')

    newDino.innerHTML = 
    `
    <img class="background-image" src="${imageSrc}" alt="${name}" />
    <a id=${id}>
        <h1 class="dino-name">${name}</h1>
    </a>
    `
    
    dinoIndex.children[1].appendChild(newDino)

    
}

data.forEach(dino => {
    newDinosaurInIndex(dino)
    document.getElementById(dino.id).onclick = () => console.log(dino)
});

