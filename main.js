let pets = [
    {
        name: "firulai",
        species: "Dog",
        age: 5,
        weight: 12,
        healthStatus: "Healthy"
    }   
]

const register = (callback) =>{
    let name = prompt("Type your pets name")
    let species = prompt("Type your pets species")
    let age = parseInt(prompt("Type your pets age"))
    let weight = parseFloat(prompt("Type your pets weight")) 
    let healthStatus = prompt("Type your pets health status (Healthy, In treatment or Sick)")
    pets.push({name, species, age, weight, healthStatus})
    console.log("Registering pet, please wait...")

    setTimeout(function(){
        alert("Registration succesfully done")
        callback()
    }, 2000);    
}

const listPet = () =>{
    if(pets.length === 0){
        alert("Theres no pet registered")
        return
    }

    let list = ""
    pets.forEach((p, index) => {
        list += `${index + 1}. Name: ${p.name},\n Species: ${p.species},\n Age: ${p.age},\n Weight: ${p.weight},\n Health Status: ${p.healthStatus}\n` 
    })  
    alert(list)
}

const searchPet = () =>{

    let name = prompt("Type pets name to look for");
    let pet = pets.find(m => m.name.toLowerCase() === name.toLowerCase());
    if (pet) {
        alert(`Pet found: \nName: ${pet.name}\nSpecies: ${pet.species}\nAge: ${pet.age} years\nWeight: ${pet.weight}kg\nHealth Status: ${pet.healthStatus}`);
    } else {
        alert("Not pet found.");
    }
}

const updateHealthStatus = () => {
    let name = prompt("Type pets name to update");
    let pet = pets.find(p => p.name.toLowerCase() === name.toLowerCase());
    if (pet) {
        pet.healthStatus = prompt("Enter the new status (Healthy, Sick, In treatment):");
        alert("health status succesfuly updated");
    } else {
        alert("Not pet found.");
    }
}

const deletePet = () => {
    let name = prompt("Type pets name to delete");
    let ind = pets.findIndex(p => p.name.toLowerCase() === name.toLowerCase());
    if (ind !== -1) {
        pets.splice(ind, 1);
        alert("Succesfuly deleted");
    } else {
        alert("Not pet found.");
    }
}

const menu = () => {
    let option;
    do {
        option = prompt("Choose an option:\n1. Register pet\n2. List \n3. Search pet\n4. Change a pet's health status \n5. Delete pet\n6. Leave");
        switch (option) {
            case "1": register("function"); break;
            case "2": listPet(); break;
            case "3": searchPet(); break;
            case "4": updateHealthStatus(); break;
            case "5": deletePet(); break;
            case "6": break;
            default: alert("No valid option. Try again.");
        }
    } while (option !== "6");
};

menu();