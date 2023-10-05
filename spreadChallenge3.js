let person = {
    firstName: "John",
    lastName: "Doe",
    age: 20
}
console.log()
function addHobby(a,hobby){
    console.log({...a,hobby});
}
addHobby(person,"hiking")