let animalName = [
    Scruffy,
    Cleo,
    Zuri,
]

function addName() {
    let newName = prompt("What name do you want to add? ")
    animalName.push(newName)
}

function removeName() {
    let index = prompt("choose a number between 0 and 2")
    animalName.splice(index, 1)
}



  