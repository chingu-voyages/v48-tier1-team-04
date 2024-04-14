import data from '../data/dinosaurs.json' assert { type: 'json'};

function randomDino(){
    return data[Math.floor(Math.random() * data.length)]
}

export default randomDino