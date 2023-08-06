let pets = [
  {name: 'Blinky', age: 5, species:'Sheep'},
  {name: 'Zuri', age: 8, species:'Dog'},
  {name: 'Chunky', age: 3, species:'Rabbit'},
]

function showPets(){
  // show the pets 
  for(let pet of pets){
    alert(pet.name)
  }
}

function addPet(){
  //get details of new pet
  let name = prompt('What name do you want to add?')
  let age = prompt('What is the age of your pet?')
  let species = prompt('What is the species of your pet?') 

  // check that the input is valid
  if (name != '' && age > 0 && age< 200 && species != '') {
    // create a pet objects with the deatils
  let pet = {
    name: name,
    age: age,
    species: species
  }
  // add pet object to pets array
  pets.push(pet)
  } else {
    alert("The pet you entered does not exist")
  }
  
  
}

function searchPet(){
  // get the name of the pet to search for
  let petToSearchFor = prompt("What is the name of the animal you want to find?")

  // create a variable to store weather we found it or not (haven't yet)
  let searchResult = false

  // check each pet's name to see if it's the pet we're looking for, update the result if it is 
  for (let pet of pets) {
    if (pet.name == petToSearchFor) {
      searchResult = true
    }
  }

  // output weather the search found the pet or not
  if (searchResult == true) {
    alert("found the pet!")
  } else {
    alert("Didn't find the pet")
  }
}


function removePet(){
  // output the names of each pet
  let index = 0 
  for (let pet of pets){
    alert(index + ":" + pet.name)
  }

  // get the index of the pet to remove
  index = index + 1
  let indextoRemove = prompt("Which pet would you like to remove")

  // remove the pet at index
  pets.splice(indextoRemove, 1)
}



  