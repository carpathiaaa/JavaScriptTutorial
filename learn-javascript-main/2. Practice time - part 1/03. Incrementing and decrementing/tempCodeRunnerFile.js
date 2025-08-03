let myPoints = 3

// Create two functions, add3Points() and remove1Point(), and have them
// add/remove points to/from the myPoints variable
function add3Points(myPoints) {
    return (myPoints + 3)
}

function remove1Point(myPoints) {
    return (myPoints - 1)
}

myPoints = add3Points(myPoints)
myPoints = add3Points(myPoints)
myPoints = add3Points(myPoints)
myPoints = remove1Point(myPoints)
myPoints = remove1Point(myPoints)


// Call the functions to that the line below logs out 10
console.log(myPoints)