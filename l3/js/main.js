//task1

/*
let a = 158;
let b = 2;

let c = a + b;
let d = a * b;
let e = b / a;

console.log(c, d, e);
*/

//task2

/*
let name = "Алевтина";
console.log('Привет, ${name}!');
*/

//task3

/*
let name = prompt("Ваше имя?");
console.log('Привет, ${name}!')
*/

//task3-1

/*
let name = prompt("Ваше имя?", "Иван Иванович");
console.log('Привет, ${name}!')
*/

//task4
/*
function printName(name){

    console.log('Привет, ${name}!');

};

printName("Вася");
*/

//task5

/*
let result = confirm("Вы уверены?");
if (result){
    console.log("Super!");
}

else{
    onsole.log("Sad!");
}
*/

//task6


let age = 101;

switch (age){

    case 18:
        console.log("Совершеннолетним - можно!");
        break;
    case 10: 
        console.log("Детям - нельзя!");
        break;
    case 30:
        console.log("Спать!");
        break;
    default:
        console.log("I dont know!");
        break;        
}



if (age == 18){
    alert("Совершеннолетним - можно!");
}
else if (age < 18) {
    alert("Детям - нельзя!");
}
else if (age > 40) {
    alert("Сочувствуем!!");
}
else  {
    alert("Что Вам делать - решайте сами!");
}
