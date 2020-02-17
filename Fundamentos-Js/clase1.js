// Strings
var name = 'Iván'
var lastname = 'Nieves Ardila'
var full_name = `${name.toLowerCase()} ${lastname.toUpperCase()}`
var firts_letter = name.charAt(0)
var str = lastname.substr(1, 2)

// Numbers 
var age = 22
age += 1

var weight = 62
weight -= 1

var sandwich = 1

weight = weight + sandwich
// Las operaciones con decimal en js no son muy precisas
var wine_price = 200.35
var total =  Math.round(wine_price * 100 * 3) / 100
var total_string = total.toFixed(2)
// Para pasar de un cadena a un decimal
var total2 = parseFloat(total_string)

var pizza = 8
var people = 2
var servings = pizza / people