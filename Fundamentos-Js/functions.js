/* Para evitar acceder al valor global de una variable (window.var_name)
hacemos que la funcion reciba N parametros para que dicha variable
solo se vea modificada en este instante y dentro de esta funcion. */

var ivan = {
    name: 'Iván',
    lastname: 'Nieves Ardila',
    age: 22
}
// var name = ivan.name -> var { name } = ivan
var veronica = {
    name: 'Verónica',
    lastname: 'Álvarez Muñoz',
    age: 23
}

function printAge(name, age) {
    console.log(`${name} tine ${age} años`);
}

function printNameUpperCase(person) {
    console.log(person.name.toUpperCase());
}

function printNameLoweCase({name}) {
    console.log(name.toLowerCase());
}

printNameUpperCase(veronica)
printNameUpperCase({name: 'Heida'})
printNameLoweCase(ivan)

function printNameAndAge(person) {
    console.log(`Hola me llamo ${person.name} y tengo ${person.age} años`);
}

printNameAndAge(ivan)

/* Los objetos que pasamos por parametro los pasamos por referencia es decir
que si los modificamos dentro del cuerpo de una funcion este se va a ver
editado de manera globla */

/* Al hacer return ... es para entrar a modificar el objeto que me estan
enviando y crear uno nuevo a partir de este */
function birthday(person) {
    return {
        ...person,
        age: person.age +1

    }
}