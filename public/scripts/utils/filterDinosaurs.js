import data from '../../assets/dinosaurs.json' with { type: 'json'};

export function filterDinosaursByName(query){
    return data.filter(dino => {
        return dino.name.toLowerCase().indexOf(query.toLowerCase()) > -1
    })
}
