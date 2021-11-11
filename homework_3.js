//Работа с if-else

//console.log("Задача 1");
//let a = 3;
//if (a==0) {
//   console.log("Верно")
//} else {
//    console.log("Неверно")
//}
//console.log("Задача 2");
//if (a>0) {
//    console.log("Верно")
//} else {
//    console.log("Неверно")
//}
//console.log("Задача 3");
//if (a<0) {
//    console.log("Верно")
//} else {
//    console.log("Неверно")
//}
//console.log("Задача 4");
//if (a>=0) {
//    console.log("Верно")
//} else {
//    console.log("Неверно")
//}
//console.log("Задача 5");
//if (a<=0) {
//    console.log("Верно")
//} else {
//    console.log("Неверно")
//}
//console.log("Задача 6");
//if (a!==0) {
//    console.log("Верно")
//} else {
//    console.log("Неверно");
//}
//console.log("Задача 7");
//if (a==='test') {
//    console.log("Верно")
//} else {
//    console.log("Неверно")
//}
//console.log("Задача 8");
//if (a==='1') {
//    console.log("Верно")
//} else {
//    console.log("Неверно")
//}

//Работа с логическими переменными

//let test = false;
//console.log("Задача 1");
// длинная запись
//if (test) {
//    console.log("Верно")
//} else {
//    console.log("Неверно")
//}
// короткая запись
//console.log(test ? "Верно" : "Неверно")
//console.log("Задача 2")
// длинная запись
//if (!test) {
//    console.log("Верно")
//} else {
//    console.log("Неверно")
//}
// короткая запись
//console.log(!test ? "Верно" : "Неверно")

//Работа с && и ||

//let a = 0;
//console.log("Задача 1");
//if (a>0 && a<5) {
//   console.log("Верно")
//} else {
//    console.log("Неверно")
//}
//console.log("Задача 2");
//if (a==0 || a==2) {
//   a = a + 7
//} else {
//   a = a / 10
//}
//console.log(a)
//let a = 12;
//let b = 5;
//console.log("Задача 3");
//if (a<=0 && b>=3) {
//    console.log(a+b)
//} else {
//    console.log(a-b)
//}
//console.log("Задача 4");
//if ((a>2 && a<11)||(b>=6 && b<14)) {
//    console.log("Верно")
//} else {
//    console.log("Неверно")
//}

// На switch-case

//let num = 18;
//switch (num) {
//    case 1: 
//        console.log("Зима")
//    break;
//    case 2:
//        console.log("Весна")
//    break;
//    case 3:
//        console.log("Лето")
//    break;
//    case 4:
//        console.log("Осень")
//    break;
//    default:
//        console.log("Некорректное значение переменной")
//   break;
//}
//--------------------------------------------
//ОБЩИЕ ЗАДАЧИ
//--------------------------------------------
//-------------Задача 1
//let day = 31;
//if (day<=10 && day>0) {
//    console.log("Первая декада")
//} else if (day<=20 && day>0) {
//    console.log("Вторая декада")
//} else if (day<=31 && day>0) {
//    console.log("Третья декада")
//} else console.log("Некорректный ввод");
//---------------Задача 2
//let month = 36
//if (month>0 && month<3 || month===12) {
//    console.log("Зима")
//} else if (month>0 && month<6) {
//    console.log("Весна")
//} else if (month>0 && month<9) {
//    console.log("Лето")
//} else if (month>0 && month<12) {
//    console.log("Осень")
//} else console.log("Некорректный ввод переменной");
//---------------Задача 3
//for (let i=1; i<=100; i++) {
//    if (i%3===0 && i%5===0) {
//        console.log("FizzBuzz")
//    } else if (i%3===0) {
//        console.log("Fizz")
//    } else if (i%5===0) {
//        console.log("Buzz")
//   } else console.log(i)
//}
//----------------Задача 4
//let str = 'abcde';
//if (str[0]==='a') {
//    console.log('Да')
//} else console.log('Нет');
//----------------Задача 5
//let str = '12345'
//if (str[0]==1 || str[0]==2 || str[0]==3) {
//    console.log('Да')
//} else console.log('Нет');
//----------------Задача 6
//let str = '543';
//let sum = 0;
//for (i=0; i < str.length ; i++) {
//    console.log(str[i]);
//    sum=sum + (+str[i]);
//}
//console.log(sum);
//-----------------Задача 7
//let str = '123321'
//let sum1 = 0;
//let sum2 = 0;
//for (i=0; i < (str.length/2) ; i++) {
//    sum1 = sum1 + (+str[i]);
//}
//for (j=str.length/2; j < str.length ; j++) {
//    sum2 = sum2 + (+str[j]);
//}
//if (sum1==sum2) {
//    console.log("Да")
//} else console.log("Нет")

//--------------------------------------------
// Циклы WHILE и FOR
//--------------------------------------------
//----------------------Задача 1
//for (i=1; i<=100; i++) {
//    console.log(i)
//}
//let i = 1;
//while (i<=100) {
//    console.log(i)
//    i++
//}
//----------------------Задача 2
//for (i=11; i<=33; i++) {
//    console.log(i)
//}
//let i = 11;
//while (i<=33) {
//    console.log(i)
//    i++
//}
//----------------------Задача 3
//for (i=0; i<=100; i++) {
//    if (i%2===0) {console.log(i)}
//}
//let j = 0
//while (j<=100) {
//    if (j%2===0) {console.log(j)}
//    j++
//}
//----------------------Задача 4
//let sum = 0;
//for (i=0; i<=100; i++) {
//    sum = sum + i;
//}
//console.log(sum);
//let sum = 0;
//let i = 0;
//while (i<=100) {
//    sum = sum + i
//    i++
//}
//console.log(sum)
//-----------------------Задача 5
//let a = 0
//let num = 6; //+prompt('Введите число', "0");
//let factorial = 1;
//while(num>a) {
//     a++
//     factorial = factorial*a;
//};
//console.log(factorial)

//let num = 5; //+prompt('Введите число', "0"); //prompt в терминале не работает
//let factorial = 1;
//for (i=1; num>=i; i++) {
//    factorial = factorial*i;
//}
//console.log(factorial);

//-----------------------Задача 6
//let num = 5;
//console.log(+(String(num).repeat(9)));

//let num = 5;
//let i = 0;
//let longNum = '';
//while(i < 9) {
//     i++
//     longNum = longNum + num;
//};
//console.log(+longNum);

//let num = 5;
//let longNum = '';
//for (i=0; i<9; i++) {
//    longNum = longNum + num;
//}
//console.log(+longNum);
//------------------------Задача 7
//for (i=0; i<=300; i++) {
//    if (i===0) {
//        console.log("Zero")
//    }
//    if (i%2===0 && i%12===0 && i!=48) {
//        console.log("Ooops");
//    }
//    if (i%2!=0 && i%3===0) {
//        console.log("Hola");
//    }
//}

//let i = 0;
//console.log("Zero");
//while (i<=300) {
//    i++
//    if (i%2===0 && i%12===0 && i!=48) {
//        console.log("Ooops");
//        }
//    if (i%2!=0 && i%3===0) {
//        console.log("Hola");
//    }
//}
//--------------------Работа с for для массивов
//---------------Задача 1
//let arr = [1,2,3,4,5];
//for (i=0; i<arr.length; i++) {
//    console.log(arr[i]);
//}
//---------------Задача 2
//let result = 0;
//let arr = [1,2,3,4,5];
//for (i=0; i<arr.length; i++) {
//    result = result + arr[i]
//}
//console.log(result);
//-----------------------------------------
//-----------ЗАДАЧИ ОБЩИЕ------------------
//-----------------------------------------
//---------------Задача 1
//let arr = [2,5,9,15,0,4];
//for (i=0; i<arr.length; i++) {
//    if (arr[i]>3 && arr[i]<10) {
//        console.log(arr[i]);
//    }
//}
//---------------Задача 2
//let sum = 0;
//let arr = [-5,7,8,-3,-1,4];
//for (i=0; i<arr.length; i++) {
//    if (arr[i]>=0) {
//        sum = sum + arr[i]
//    }
//}
//console.log(sum);
//-----------------Задача 3
//let arr = [1,2,5,9,4,13,4,10];
//for (i=0; i<arr.length; i++) {
//    if (arr[i]==4) {
//        console.log("Есть!");
//        break
//    }
//}
//------------------Задача 4
//let arr = [10,20,30,50,235,3000];
//for (i=0; i<arr.length; i++) {
//    text = String(arr[i]);
//    if (text[0]=='1' || text[0]=='2' || text[0]=='5') {
//        console.log(arr[i])
//    }
//}
//--------------------Задача 5
//let arr = [1,2,3,4,5,6,7,8,9];
//let result = '-';
//for (i=0; i<arr.length; i++) {
//    result = result + String(arr[i]) + '-';
//} 
//console.log(result);
//---------------------Задача 6
//let arr = [
//    'Понедельник',
//    'Вторник',
//    'Среда',
//    'Четверг',
//    'Пятница',
//    'Суббота',
//    'Воскресенье'
//];
//let dayOff1 = "Суббота";
//let dayOff2 = "Воскресенье";
//for (i=0; i<arr.length; i++) {
//    if (arr[i]==dayOff1 || arr[i]==dayOff2) {
//        console.log("\033[0;1m"+arr[i]); //обжирение подсмотрела в других домашках. стыдно, но что есть) 
//    } else {
//        console.log(arr[i]);
//    }
//}
//--------------------Задача 7
//let arr = [
//    'Понедельник',
//    'Вторник',
//    'Среда',
//    'Четверг',
//    'Пятница',
//    'Суббота',
//   'Воскресенье'
//];
//let day = "Суббота";
//for (i=0; i<arr.length; i++) {
//    if (arr[i]==day) {
//        console.log("\033[0;3m"+arr[i]); //ну и курсив оттуда же, правда не работает 
//    } else {
//        console.log("\033[0m"+arr[i]);
//    }
//}
//--------------------Задача 8
//let n = 1000;
//let num = 0;
//for (i=0; i<n; i++) {
//    n = n/2;
//    num = num + 1;
//    if (n<50) break;
//} 
//console.log(n);
//console.log(num);
//--------------------Задача 9
//let num1 = -10;
//let num2 = -6;
//let arrNut = [];
//let naturalNum = 0;
//if (num1>num2) {
//    for (i=num2; i<=num1; i++) {
//        if (num1<0) {
//            console.log("Среди отрицательных чисел нет натуральных");
//            break;
//        }
//        arrNut.push(i);
//        naturalNum = naturalNum + 1;
//    }
//} else {
//    for (i=num1; i<=num2; i++) {
//        if (num2<0) {
//            console.log("Среди отрицательных чисел нет натуральных");
//           break;
//        }
//        if (num1<=0) {
//            num1++;
//        } else {
//            arrNut.push(i);
//            naturalNum++;
//        } 
//    }
//}
//console.log(arrNut);
//----------------------Задача 10
//let num = +prompt("Введите число");
//let arrNum = [];
//arrNum.push(num);
//for (num; num!=1;) {
//    if (num%2==0) {
//        num = num/2;
//    } else {
//        num = num*3 + 1;
//    }
//    arrNum.push(num);
//}
//console.log(arrNum);



