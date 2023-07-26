let animal = [
    {name: 'Blinky', age: 5, species:'Sheep'},
    {name: 'Zuri', age: 8, species:'Dog'},
    {name: 'Chunky', age: 3, species:'Rabbit'},
]

function addPet() {
    let newName = prompt('What name do you want to add?')
    let newAge = prompt('What is the age of your pet?')
    let newSpicies = prompt('What is the spieces of your pet?')
    let pet = {
        newName: newName,
        newAge: newAge,
        newSpicies: newSpicies
    }
    animal.push(pet)
}

function showPets() {
    alert(animal)
}

function removeName() {
    let index = prompt("choose a number between 0 and 2")
    animal.splice(index, 1)
}



  