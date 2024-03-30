import data from '../../assets/dinosaurs.json' assert { type: 'json'};

function filterDinosaursByName(query){
    return data.filter(dino => {
        return dino.name.toLowerCase().indexOf(query.toLowerCase()) > -1
    })
}

export default filterDinosaursByName