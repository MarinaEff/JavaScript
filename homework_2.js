console.log("кот" > "код")   //true буква т больше буквы д
console.log("2" + 2 * "2")    //24 сначала выполнится умножение, приведется к числу, 2*2=4, потом строка "2 прибавится к строке "4"
console.log(undefined == null)  //true равны друг другу и больше никому
console.log(undefined === null) //false разные типы 
console.log(null == 0)          //false null равен только undefined
console.log(2 > "3")            //false приводятся к числу оба, 2 не больше 3
console.log(null - false + true) //1 приводятся к числам, 0-0+1=1
console.log(1 / "l")             //NaN деление на "l", которое не может быть приведено к числу
console.log("2" * "3")           //6 Оба операнда приводятся к числу
console.log(4 + 5 + "O")         //9О Сложение 4+5=9 и приклеивание к 9 строковой О  
console.log("l" + 4 + 5)         //l45 Т.к. первый операнд строка, все приводится к строке
console.log("4" - 2)             //2 Оператор - всегда приводит оба операнда к числовому значению 
console.log("4" - "4x")          //NaN 4х нельзя привести к числу, поэтому все значение не число
console.log(null == false)       //false null может быть равен только undefined
console.log(" -4 "/ 0 + 1)       //-Infinity не совсем понимаю откуда "-", а значение такое потому что деление на ноль
console.log(null + 1)            //1 Оба операнда приводятся к числам, 0+1=1 
console.log(undefined + null)    //NaN Первый операнд приводится к NaN