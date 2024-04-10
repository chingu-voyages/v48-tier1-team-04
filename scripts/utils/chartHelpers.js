import data from '../data/dinosaurs.json' assert { type: 'json'};
import Chart from 'chart.js/auto'

const calculateDiet = () =>{
    // dinoDiet object records the count of dinosaur diet
    const dinoDiet = {
        carnivorous: 0,
        herbivorous: 0,
        omnivorous: 0,
    };
    // loop through every dinosaur and increment 1 with matching diet category
    data.forEach(dinosaur =>{
        if (dinosaur.diet == "carnivorous"){
            dinoDiet.carnivorous += 1;
        }
        else if (dinosaur.diet == "herbivorous"){
            dinoDiet.herbivorous += 1;
        }
        else if (dinosaur.diet == "omnivorous"){
            dinoDiet.omnivorous += 1;
        }
    })
    console.log(dinoDiet)
    return dinoDiet;
}

// calcuate the eras dinosaurs lived during
//"whenLived": "Early Jurassic, 199-189 million years ago",
const calculateEra = () =>{
    // loop through every dinosaur object and print out the whenLived property
    data.forEach(dinosaur =>{
        console.log(dinosaur.whenLived);
    })
}
export {calculateDiet, calculateEra}
      

    


