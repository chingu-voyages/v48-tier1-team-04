import data from './json.js'
const anchor = document.getElementById('dino-list')

data.map(dinosaur => {
    const li = document.createElement('li')
    li.innerHTML = dinosaur.name
anchor.append(li)
return "list item added of " + dinosaur.name + " to the list"
});
