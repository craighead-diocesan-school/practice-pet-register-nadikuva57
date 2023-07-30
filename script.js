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

function findPet() {
    let searchAnimal = prompt("enter a animal to search for:")
    let searchResult = false
  
    for (let currentNumber of animal) {
      if (currentNumber === Number(searchAnimal)) {
        searchResult = true
      }
    }
  
    if(searchResult = true){
      alert(searchAnimal + 'was found')
    }else{
      alert(searchAnimal + 'was not found')
    }
  
    alert(searchAnimal + ' found: ' + searchResult)
}

function removeName() {
    let index = prompt("choose a name to delete")
    animal.splice(index, 1)
}



  