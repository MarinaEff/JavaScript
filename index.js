console.log("Hello World");
let num = 123;                       /*переменная типа number*/ 
let str = "Здесь строковая переменная"; /*переменная типа string*/
let countVerified = true;            /*переменная типа boolean*/
let sum = null;                      /*переменная типа null*/
let sum2 = undefined;                /*переменная типа undefined*/
let people = {
    education: "Height",
    work: true
}                        /*переменная типа object*/
/*let countVerified = true;            /*переменная типа symbol*/
let bigInt = 12345678901234567890n;  /*переменная типа bigInt*/ 
console.log(num);
console.log(str);
console.log(countVerified);
console.log(sum);
console.log(sum2);
console.log(people);
console.log(bigInt);
typeof (sum);
typeof sum;
// const userName = "Marina";
// userName = "Svetlana" меняем значение константы, выводит ошибку 
let peopleLet = {
    name: "Letty",
    age: 10
} 
const peopleConst = {
    name: "Consty",
    age: 20
}
var peopleVar = {
    name: "Varry",
    age: 30
}
console.log(peopleLet,peopleConst,peopleVar)
peopleLet = {
    name: "Atty",
    age: 0
}
console.log(peopleLet)
//peopleConst = {
//    name: "Onsty",
//    age: 0
//}
//console.log(peopleConst)
peopleVar = {
    name: "Arre",
    age: 0
}
console.log(peopleVar)



