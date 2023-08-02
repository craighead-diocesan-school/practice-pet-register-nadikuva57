let animal = [
    {name: 'Blinky', age: 5, species:'Sheep'},
    {name: 'Zuri', age: 8, species:'Dog'},
    {name: 'Chunky', age: 3, species:'Rabbit'},
]

function showPets(){
  for (let animals of animal){
    alert(animals.name)
  }
}

function addPet(){
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
    alert(searchAnimal + ' was found')
  }else{
    alert(searchAnimal + ' was not found')
  }
}

function removePet() {
  let index = 0 
  for (let animals of animal){
    alert(index + ":" + animal.name)
  }
  let indextoRemove = prompt("Which pet would you like to remove")
  pet.splice{indextoRemove, 1}
}



  