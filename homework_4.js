//--------------- *** 1 ***
//Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

//function squareNum(num) {
//  return (num = num * num);
//}
//console.log(squareNum(3));

//---------------- *** 2 ***
//Сделайте функцию, которая возвращает сумму двух чисел.
//function sum(num1, num2) {
//  return (sum = num1 + num2);
//}
//console.log(sum(3, 4));
//
//let sum2 = (num1, num2) => {
//  return num1 + num2;
//};
//console.log(sum2(3, 4));

//---------------- *** 3 ***
//Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
//let sum2 = (num1, num2, num3) => {
//  return (num1 - num2) / num3;
//};
//console.log(sum2(5, 1, 2));

//---------------- *** 4 ***
//Сделайте функцию, которая принимает параметром число от 1 до 7,
//а возвращает день недели на русском языке.

//function getStringDay(num) {
//  let dayArray = [
//    "Понедельник",
//    "Вторник",
//    "Среда",
//    "Четверг",
//    "Пятница",
//    "Суббота",
//    "Воскресенье",
//  ];
//  return dayArray[num - 1];
//}
//console.log(getStringDay(7));

//---------------- *** 5 ***
//Сделайте функцию, которая параметрами принимает 2 числа.
//Если эти числа равны - пусть функция вернет true, а если не равны - false.

//const isCompare = (num1, num2) => num1 === num2;
//console.log(isCompare(1, 5));

//---------------- *** 6 ***
//Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма
//больше 10 - пусть вернет true, а если нет то - false.

//const isCompare = (num1, num2) => num2 + num2 > 10;
//console.log(isCompare(3, 10));

//---------------- *** 7 ***
//Сделайте функцию, которая параметром принимает число и проверяет - отрицательное
//оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.

//const isCompare = (num) => num < 0;
//console.log(isCompare(0));

//---------------- *** 8 ***
//Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет,
//что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

//const isNumberInRange = (num) => num > 0 && num < 10;
//console.log(isNumberInRange(5));

//---------------- *** 9 ***
//Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида
//«rgb(23,100,134)». Если аргументы не заданы, считать их равными нулю. Не проверять переменные
//на тип данных

//function rgb(num1 = 0, num2 = 0, num3 = 0) {
//  return `rgb(${num1}, ${num2}, ${num3})`;
//}
//console.log(rgb(20, 30));

//---------------- *** 10 ***
//Написать функцию, которая принимает в себя три параметра - число и две функции. Первая переданная
//функция  возвращает возведенное в квадрат переданное число и будет вызываться, если число четное.
//Вторая переданная коллбэк-функция будет вызываться с переданным в нее числом , если число нечетное,
//и будет возвращать число, увеличенное на 1.
//function squareNum(a) {
//  return (a = a * a);
//}
//function plusNum(a) {
//  return (a = a + 1);
//}
//function getNum(num, squareNum, plusNum) {
//  if (num % 2 === 0) {
//    return squareNum(num);
//  } else {
//    return plusNum(num);
//  }
//}
//console.log(getNum(3, squareNum, plusNum));

//---------------- *** 11 ***
//Написать функцию mult(num1, num2 , num3) принимающую 3 числа. Функцию перемножает num1 и num2
//столько раз, сколько указано в третьем аргументе num3. Значения num1 и num2 по умолчанию 1,
//num3 по умолчанию 2.
//function mult(num1, num2, num3) {
//  let result = 0;
//  for (i = 1; i <= num3; i++) {
//    result = result + num1 * num2;
//  }
//  return result;
//}
//console.log(mult(3, 3, 2));

//---------------- *** 12 ***
//Написать функцию, которая принимает 3 аргумента(каждый аргумент - 1 слово) и возвращает строку с этими
//3 словами, расположенными в алфавитном порядке.
//function sortText(word1, word2, word3) {
// let arrWord = [word1, word2, word3];
// arrWord.sort();
//  return arrWord.join(" ");
//}
//console.log(sortText("дети", "ветрянкой", "болеют"));

//---------------- *** 13 ***
// Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше
//10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.
//const isNumberInRange = (num) => num > 0 && num < 10;
//let arrNum = [1, 5, 10, 20, 45, 8, 7, 3, 4, -4];
//function sortArr(arrNum) {
//  let newArrNum = [];
//  for (let i of arrNum) {
//    if (isNumberInRange(i)) {
//      newArrNum.push(i);
//    }
//  }
//  return newArrNum;
//}
//console.log(sortArr(arrNum));

//---------------- *** 14 ***
// Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число
//и возвращает сумму его цифр.
//function getDigitsSum(digit) {
//  let sum = 0;
//  let arrDigit = String(digit).split("");
//console.log(arrDigit);
//  for (let i of arrDigit) {
//    sum = sum + +i;
//  }
//  return sum;
//}
//console.log(getDigitsSum(456));

//---------------- *** 15 ***
// Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную
//функцию getDigitsSum из предыдущей задачи.
//function searchYear() {
//  let arrYear = [];
//  for (let i = 1; i <= 2020; i++) {
//    if (getDigitsSum(i) === 13) {
//      arrYear.push(i);
//    }
//  }
//  return arrYear;
//}
//console.log(searchYear());

//---------------- *** 16 ***
// Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет:
//четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
//const isEven = (int) => int % 2 === 0;
//console.log(isEven(5));

//---------------- *** 17 ***
// Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные
//из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
//let arrInt = [5, 7, 10, 15, 123, 18, 145];
//function arrSort(arrInt) {
//  let newArrInt = [];
//  for (let i of arrInt) {
//    if (isEven(i)) {
//      newArrInt.push(i);
//    }
//  }
//  return newArrInt;
//}
//console.log(arrSort(arrInt));

//---------------- *** 18 ***
// Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей
//(чисел, на которое делится данное число без остатка).
//function getDivisors(num) {
//  let arr = [];
//  for (let i = 1; i < num; i++) {
//    if (num % i === 0) {
//      arr.push(i);
//    }
//  }
//  return arr;
//}
//console.log(getDivisors(10));

//---------------- *** 19 ***
// Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.
//let arr = [5, 7, 10, 1, 13];
//function outputArr(arr) {
//  if (arr.length > 0) {
//    console.log(arr.shift());
//    outputArr(arr);
//  }
//}
//outputArr(arr);

//---------------- *** 20 ***
// Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так,
//пока сумма не станет однозначным числом (9 и менее).
let digit = 555555;
function getDigitsSum(digit) {
  let sum = 0;
  let arrDigit = String(digit).split("");
  //console.log(arrDigit); //для проверки адекватности логики))
  for (let i of arrDigit) {
    sum = sum + +i;
    //console.log(sum); //для проверки адекватности логики))
  }
  if (sum > 9) {
    return getDigitsSum(sum);
  }
  return sum;
}
console.log(getDigitsSum(digit));
