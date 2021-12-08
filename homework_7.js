// С переборами массивов циклами, с заданием всяких условий вообще никаких проблем..
// А вот с применением методов со скрипом идет, очень почему то сложно. 
// И синтаксис никак не дается. 

// 1 Используя метод map() напишите код, который получает из массива
//  строк новый массив, содержащий их длины.

//На решение этой прекрасной задачи я потратила полтора часа, 
//уже готова была впасть в истерику, а потом увидела, что запускаю не тот файл(
    
// const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
// const vegetableLength = vegetables.map((el) => (el.length));
// console.log(vegetableLength); // 7,4,7,8

// 2 Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. 
// Использую метод reduce() напишите функцию currentSums(numbers), 
// которая возвращает новый массив из такого же числа элементов, в 
// котором на каждой позиции будет находиться сумма элементов массива 
// numbers до этой позиции включительно.

//Я всю бошку себе сломала с этим редьюсом, перечитала кучу всего, даже видео смотрела,
//где то  что то не откладывается видимо. или мозгов нет. 
// const numbers = [2, 3, 5, 7, 11, 13, 17, 19]
// const currentSums = (numbers) => {
//     const result = [];
//     numbers.reduce((sum,el,i) => {
//         sum += el;
//         console.log(i);
//         result[i] = sum;
//         console.log(result[i]);
//     },0) 
//     return result;
// }
// console.log(currentSums(numbers)); //массив получается [2, NaN, NaN.....] 
//поэтому через циклы
// const numbers = [2, 3, 5, 7, 11, 13, 17, 19];
// const currentSums = (numbers) => {
//     const result = [];
//     let sum = 0;
//     for (i in numbers) {
//         sum +=numbers[i];
//         result[i] = sum;
//     }
// return result;
// }
//console.log(currentSums(numbers)); // [2, 2+3, 2+3+5, 2+3+5+7, 2+3+5+7+11, 2+3+5+7+11+13, 2+3+5+7+11+13+17] = [ 2,5,10,17,28,41,58]

// 3 Напишите код, который получает из массива чисел новый массив, содержащий пары
//  чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

// const arr = [0, 1, 2, 3, 4, 5, 6, 7];
// function sumSeven(arr) {
//      let newArr = [];
//      let sumSevenArr = [];
//      for (i in arr) {
//          for (j in arr) {
//              if (arr[i]+arr[j] == 7 && i !== j) {
//                  newArr[0] = arr[i];
//                  newArr[1] = arr[j];
//                  console.log(newArr.join(':'));
//                  sumSevenArr[i] = newArr.join(':');
//              }
//          }
//      }
//      return sumSevenArr;
// }
// console.log(sumSeven(arr));

// 4 Перед вами переменная, содержащая строку. Напишите код, создащий массив, 
// который будет состоять из первых букв слов строки str. 

// let str = "Каждый охотник желает знать, где сидит фазан."; 
// function foo(str) {
//     let array = []
//     let newStr = '';
//     newStr = str[0]+' ';
//     for (let i = 1; i< str.length; i++) {
//         if (str[i] == ' ') {
//             newStr += str[i+1] + ' ';
//         }
//     }
//     return array = newStr.split(' ');
// }
// console.log(foo(str));  // [К,о,ж,з,г,с,ф]

// 5 Перед вами переменная, содержащая строку. Напишите код, создащий массив, 
// который будет состоять из строк, состоящих из предыдущего, текущего и 
// следующего символа строки str. 

// let str = "JavaScript"; 
// function foo(str) {
//     let array = [];
//     for (let i = 0; i < str.length; i++) {
//         if (i == 0) {
//             array[i] = str[i] + str [i+1];
//         } else if (i == str.length-1) {
//             array[i] = str[i-1] + str[i];
//         } else array[i] = str[i-1]+str[i]+str[i+1];
//     }
//     return array;      
// }
// console.log(foo(str)); // [Ja,Jav,ava,vaS,aSc,Scr,cri,rip,ipt,pt] 

//6 Напишите код, преобразующий массив цифр, которые 
//располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений.

// const numerics = [5, 7, 2, 9, 3, 1, 8];
// function foo(arr) {
//     return arr.sort().reverse();
// }
// console.log(foo(numerics)); // [9,8,7,5,3,2,1]

// 7 Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном 
// массиве, в порядке убывания их значений.

// const a = [1,2,3];
// const b = [4,5,6];
// const c = [7,8,9];
// function getArr(a, b, c) {
//     newArr = [];
//     newArr = a + ','+ b + ',' + c;
//     return newArr.split(',').sort().reverse();
// }
// console.log(getArr(a, b, c)); // [9,8,7,6,5,4,3, 2, 1]

// 8 Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму 
// элементов этого массива. Массив, конечно же, может быть произвольным. Показать решение.

// const arr = [[1,2,3],[4,5],[6]];
// const getArrSum = (arr) => {
//     arr = arr.flat(1);
//     const total = arr.reduce((total, el) => {
//         return total + el;
//     }, 0);
//     return total;
// }
// console.log(getArrSum(arr));

// 9 Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].
//  Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

// const arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// const getArrSum = (arr) => {
//     arr = arr.flat(2);
//     const total = arr.reduce((total, el) => {
//     return total + el;
//     }, 0);
// return total;
// }
// console.log(getArrSum(arr));

// 10 Дан массив с числами. Не используя метода reverse переверните его элементы в обратном 
// порядке.
// const numbers = [1,2,3,4,5,6,7,8,9];
// const getCoup = (numbers) => {
//     const newNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//         newNumbers[i] = numbers[numbers.length - 1 - i];
//     }
//     return newNumbers;
// }    
// console.log(getCoup(numbers));

// 11 Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, 
// чтобы в сумме получилось больше 10-ти.
// const numbers = [1,2,3,4,5,6,7,8,9];
// const getFold = (numbers) => {
//     let sum = 0;
//     let count = 0;
//     for (i in numbers) {
//         if (sum <=10) {          //в условиях строго больше 10, поэтому если равно 10 прибавляем еще
//             sum += numbers[i];
//             count ++;
//         }
//     }
//     return count; 
// }
// console.log(getFold(numbers));

// 12 Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. 
// Первым параметром функция принимает значение, которым заполнять массив, а вторым - 
// сколько элементов должно быть в массиве. 
// Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

// function arrayFill(str, repeat) {
//     arr = [];
//     for (let i = 0; i < repeat; i++) {
//         arr[i] = str;       
//     }
//     return arr;
// }
// console.log(arrayFill('x',5));

// 13 Создайте объект и скопируйте данный объект с помощью: Object.assign() и spread 
// оператора. Изменить любое свойство в копии объекта, и проверить не изменился ли исходный.

// const user = {
//     name: "Marina",
//     surname: "Efimova",    
//     age: 38,
// }
//решила я пока в методы объектов не лезть))


// 14 Создайте функцию, которая принимает 1 аргумент - объект пользователя user со 
// свойствами name, age, city. Функция должна возвращать новый объект пользователя с 
// измененным полем name, при этом оригинальный объект user должен остаться неизменным.
 
// 15 Написать функцию которая будет принимать n-ое количество аргументов, в качестве 
// результата функция будет возвращать сумму всех четных элементов. Для решения использовать 
// цикл for (... of ...). 


// 16 Написать функцию, которая принимает слово и возвращает true, если слово является 
// палиндромом.

//наверное не самое замечательное решение, я с методами путаюсь еще
// let word = "казак";
// const getMeaning = (word) => {
//     count = 0;
//     for (i=0; i<word.length; i++) {
//         if (word[i] == word[word.length-1-i]) {
//             count++;
//         }
//     }
//     if (count == word.length) {
//         return true
//     } return false
// }
// console.log(getMeaning(word));

// 17 Написать функцию которая будет принимать два массива, и в качестве
// результата будет возвращать только те значения которые есть и в первом и во втором массиве.

// const arrOne = [5,7,9,13,15];
// const arrTwo = [7,5,13,18,22];
// const comparArr = (arrOne,arrTwo) => {
//     for (i in arrOne) {
//         for (j in arrTwo) {
//             if (arrOne[i] == arrTwo[j]) {
//                 console.log(arrOne[i]); //в задании вроде просто вывести, без нового массива
//             }
//         }
//     }
// }
// comparArr(arrOne,arrTwo);

// Задачи из прошлых домашних заданий:

// 18 Дан массив с числами. Запишите в новый массив только те числа, которые больше 
// нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из 
// предыдущей задачи( Сделайте функцию isNumberInRange, которая параметром принимает число 
// и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, 
// если не так - false.).

// const arrNum = [1, 5, 10, 20, 45, 8, 7, 3, 4, -4];
// const isNumberInRange = (num) => num > 0 && num < 10;
// function sortArr(arrNum) {
//  let newArrNum = [];
//  for (let i of arrNum) {
//    if (isNumberInRange(i)) {
//      newArrNum.push(i);
//    }
//  }
//  return newArrNum;
// }
// console.log(sortArr(arrNum));

// 19 Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число 
// и возвращает сумму его цифр.

// function getDigitsSum(digit) {
//  let sum = 0;
//  let arrDigit = String(digit).split("");
// console.log(arrDigit);
//  for (let i of arrDigit) {
//    sum = sum + +i;
//  }
//  return sum;
// }
// console.log(getDigitsSum(456));

// 20 Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте 
// вспомогательную функцию getDigitsSum из предыдущей задачи.

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

// 21 Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его 
// делителей (чисел, на которое делится данное число без остатка).

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