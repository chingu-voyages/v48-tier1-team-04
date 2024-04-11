import data from '../data/dinosaurs.json' assert { type: 'json'};
import Chart from 'chart.js/auto'

export const calculateDiet = () =>{
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
export const calculateEra = () =>{
    const dinoEra = { 
        cretaceous: 0,
        jurassic: 0,
        triassic: 0,
    };

    // loop through every dinosaur object get the whenLived property
    data.forEach(dinosaur =>{
       const eraArray = dinosaur.whenLived.split(" ");
       // access the 2nd index in eraArray
       console.log(eraArray[1]); // eraArray[1] = "cretaceous"/"jurassic"/"triassic"
       
       // if eraArray[1] is of the value "cretaceous"/"jurassic"/"triassic", increment that value by 1
       if (eraArray[1].toLowerCase() == "cretaceous,"){     
        dinoEra.cretaceous += 1;  
        }
        else if (eraArray[1].toLowerCase() == "jurassic,"){
            dinoEra.jurassic += 1;
        }
        else if (eraArray[1].toLowerCase() == "triassic,"){
            dinoEra.triassic += 1;
        }
    })
    // console.log(dinoEra);
    return dinoEra;
}




    


