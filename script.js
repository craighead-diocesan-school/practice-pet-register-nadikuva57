let pets = [
  {name: 'Blinky', age: 5, species:'Sheep'},
  {name: 'Zuri', age: 8, species:'Dog'},
  {name: 'Chunky', age: 3, species:'Rabbit'},
]

function showPets(){
  for(let pet of pets){
    alert(pet.name)
  }
}

function addPet(){
  let name = prompt('What name do you want to add?')
  let age = prompt('What is the age of your pet?')
  let species = prompt('What is the spieces of your pet?')
  let pet = {
    name: name,
    age: age,
    species: species
  }
  pets.push(pet)
}

function searchPet(){
  let petToSearchFor = prompt("What is the name of the animal you want to find?")
  let searchResult = false
  for (let pet of pets) {
    if (pet.name == petToSearchFor) {
      searchResult = true
    }
  }

  if (searchResult == true) {
    alert("found the pet!")
  } else {
    alert("Didn't find the pet")
  }
}


function removePet(){
  let index = 0 
  for (let pet of pets){
    alert(index + ":" + pet.name)
  }
  index = index + 1
  let indextoRemove = prompt("Which pet would you like to remove")
  pets.splice(indextoRemove, 1)
}



  