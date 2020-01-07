alert("Hello Visitor, please fill in a short survey.")
var firstName = prompt("What is your first name?")
var lastName = prompt("and last name?")
var age = prompt("What's your age?")
var height = prompt("And height?")
var petName = prompt("Last question - what is your pet name?")
alert("Thank you!")
if (firstName[0] === lastName[0] && age > 20 && age < 30 && height >= 170 && petName[petName.length - 1] === "y") {
    console.log("We were waiting for you!")
}