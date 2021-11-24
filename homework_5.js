//не совсем поняла метод filter, может быть остановитесь на этом на занятии?
//и задача 25 никак не осилилась

//в заданиях везде переменные объявлены var, заменяю на let

//1 Напишите функцию delete_characters(str, length), которая возвращает подстроку,
//состоящую из указанного количества символов.
//не совсем понятно, какую то конкретную подстроку или просто сколько то первых символов?
//определенное количество первых символов пусть будет, потому что в функции аргументы
//только строка и количество символов
//let str = "Каждый охотник желает знать";
//function delete_characters(str, length) {
//  return str.substr(0, length);
//}
//console.log(delete_characters(str, 5));

//2 Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента
// и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в
//верхний регистр.
//первый способ перебором всех символов
//let str = "HTML JavaScript PHP";
//function insert_dash(str) {
//  let str1 = "";
//  for (let i = 0; i < str.length; i++) {
//    if (str[i] == " ") {
//      str1 = str1 + "-";
//    } else str1 = str1 + str[i];
//  }
//  return str1.toUpperCase();
//}
//console.log(insert_dash(str));
//второй способ - запись каждого слова в массив
//let str = "HTML JavaScript PHP";
//function insert_dash(str) {
//  str = str.toUpperCase();
//  let arr = str.split(" ");
//  return arr.join("-");
//}
//console.log(insert_dash(str));

//3 Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр
//первого символа строки из нижнего регистра в верхний.
//в общем я не вчиталась и сделала каждую первую букву большой,пусть будет так
//let str = "string not starting with capital";
//function cursive_letter(str) {
//  let str1 = "";
//  for (let i = 0; i < str.length; i++) {
//    if (i == 0) {
//      str1 = str1 + str[i].toUpperCase();
//    } else if (str[i] == " ") {
//      str1 = str1 + " " + str[i + 1].toUpperCase();
//      i++;
//    } else str1 = str1 + str[i];
//  }
//  return str1;
//}
//console.log(cursive_letter(str));

//4 Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово
//начинается с заглавной буквы.
//как раз пригодилось решение третьей задачи
//let str = "каждый охотник желает знать";
//function capitalize(str) {
//  let str1 = "";
//  for (let i = 0; i < str.length; i++) {
//    if (i == 0) {
//      str1 = str1 + str[i].toUpperCase();
//    } else if (str[i] == " ") {
//      str1 = str1 + " " + str[i + 1].toUpperCase();
//      i++;
//    } else str1 = str1 + str[i];
//  }
//  return str1;
//}
//console.log(capitalize(str));

//5 Напишите функцию change_register(str), которая принимает в качестве аргумента строку
//и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй
//ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».
//let str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";
//function change_register(str) {
//  let str1 = "";
//  for (let i = 0; i < str.length; i++) {
//    if (str[i] == str[i].toUpperCase()) {
//      str1 = str1 + str[i].toLowerCase();
//    } else str1 = str1 + str[i].toUpperCase();
//  }
//  return str1;
//}
//console.log(change_register(str));

//6 Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не
// буквенно-цифровых символов.
//https://learn.javascript.ru/regexp-methods читала тут
//let str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";
//function remove_char(str) {
//  str = str.replace(/[^a-z0-9 а-я]/gi, "");
//  let str1 = "";
//  for (i = 0; i < str.length; i++) {
//    if (str[i] == " " && str[i + 1] == " ") {
//      str1 = str1;
//    } else {
//      str1 = str1 + str[i];
//    }
//  }
//  return str1;
//}
//console.log(remove_char(str));

//7 Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое
//значение с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.
//let num = 58;
//function zeros(num, len, sign) {
//  num = String(num);
//  num = `${sign}${"0".repeat(len - num.length)}${num}`; //из нужной длины вычитаем длину аргумента num
//  return num;
//}
//console.log(zeros(num, 10, "-"));

//8 Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра
//символов.
//let str1 = "МаМа МыЛа РаМу";
//let str2 = "Мама мыла раму";
//function comparison(str1, str2) {
//  str1 = str1.toUpperCase();
//  str2 = str2.toUpperCase();
//  if (str1 > str2) {
//    console.log("Больше первая строка");
//  } else if (str2 > str1) {
//    console.log("Больше вторая строка");
//  } else console.log("Строки равны");
//}
//comparison(str1, str2);

//9 Напишите функцию insensitive_search(str1, str2), которая осуществляет поиск подстроки
//str2 в строкеstr1 без учёта регистра символов.
//let str1 = "My name is Marina";
//let str2 = "Marina";
//function insensitive_search(str1, str2) {
//  str1 = str1.toUpperCase();
//  str2 = str2.toUpperCase();
//  let posSubstr = str1.indexOf(str2);
//  if (posSubstr == -1) {
//    console.log("Подстроки нет");
//  } else console.log(`Подстрока ${str2} начинается с ${posSubstr + 1} буквы`);
//}
//insensitive_search(str1, str2);

//10 Напишите функцию initCap(str), которая преобразует стиль написания составных слов
//строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое
//слово внутри строки пишется с заглавной буквы.
//let str = " hEllo world";
//function initCap(str) {
//  str = str.toLowerCase();
//  let str1 = "";
//  for (i = 0; i < str.length; i++) {
//    if (i == 0 && str[i] == " ") {
//      str1 = str1;
//    } else if (str[i] == " ") {
//      str1 = str1 + str[i + 1].toUpperCase();
//      i++;
//    } else str1 = str1 + str[i];
//  }
//  return str1;
//}
//console.log(initCap(str));

//11 Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки
//из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_),
//причём каждое слово пишется с маленькой буквы.
//let str = "helloWorld";
//function initSnake(str) {
//  let str1 = "";
//  for (let i = 0; i < str.length; i++) {
//    if (str[i] == str[i].toUpperCase()) {
//      str1 = str1 + "_" + str[i].toLowerCase();
//    } else str1 = str1 + str[i];
//  }
//  return str1;
//}
//console.log(initSnake(str));

//12 Напишите функцию repeatStr(str, n), которая вовращает строку повторяемую определённое
//количество раз.
//let str = "мама мыла раму";
//function repeatStr(str, n) {
//  let str1 = "";
//  for (i = 0; i < n; i++) {
//    str1 = str1 + str + " ";
//  }
//  return str1;
//}
//console.log(repeatStr(str, 3));

//13 Напишите функцию path(pathname), которая вовращает имя файла (подстрока после
//последнего символа "\" ) из полного пути к файлу.
//let pathname = "/home/user/dir/file.txt";
//function path(pathname) {
//  return pathname.slice(pathname.lastIndexOf("/") + 1); //https://learn.javascript.ru/string
//}
//console.log(path(pathname));

//14 Создайте метод объекта String endsWith(), который сравнивает подстроку str1
//с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.
//let str = "Каждый охотник желает знать";
//let str1 = "скрипт";
//let str2 = "знать";
//String.prototype.endsWith = function (substring) {
//  if (str.includes(substring, str.length - substring.length)) {
//    console.log(`Строка заканчивается подстрокой "${substring}"`);
//  } else console.log(`Строка не заканчивается подстрокой "${substring}"`);
//};
//String.prototype.endsWith(str2);

//15 Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки,
//расположенную после или до указанного символа char в зависимости от параметра pos.
//let str = "Астрономия — Наука о небесных телах";
//let substr = "";
//function getSubstr(str, char, pos) {
//  if (pos == "до") {
//    substr = str.slice(0, str.indexOf(char));
//  } else if (pos == "после") {
//    substr = str.slice(str.indexOf(char) + 1);
//  } else console.log("укажите значения аргумента pos -до или -после ");
//  return substr;
//}
//console.log(getSubstr(str, "Н", "до"));

//16 Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr
//в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.
//let str = "Стоял тот , всем жителям знакомый";
//let substr = "дом";
//function insert(str, substr, pos) {
//  if (pos == "" || pos < 0) {
//    str = substr + " " + str;
//  } else if (pos >= 0 && pos <= str.length) {
//    str = str.slice(0, pos) + substr + str.slice(pos);
//  } else str = str + " " + substr;
//  return str;
//}
//console.log(insert(str, substr, 10));

//17 Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее
//указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...»
//(если не задан параметр symb) или заданным символом symb.
//let str = "Пускай ты выпита другим, а мне осталось, мне осталось";
//let symb = "";
//function limitStr(str, n, symb) {
//  if (str.length > n && symb == "" && n >= 0) {
//    return str.slice(0, n) + "...";
//  } else if (str.length > n && n >= 0) {
//    return str.slice(0, n) + symb;
//  } else return str;
//}
//console.log(limitStr(str, 23, symb));

//18 Поделить строку на фрагменты
//не совсем понятно,на какие фрагменты делить. решила сделать логику такой,
//что n - количество равных фрагментов текста
//let str = "Здесь вам не равнина, здесь климат иной";
//function cutString(str, n) {
//  if (str.length < n) {
//    console.log("Укажите меньшее количество фрагментов");
//  } else {
//    for (let i = 0; i < str.length; i = i + Math.ceil(str.length / n)) {
//      let substr = "";
//     substr = str.substr(i, Math.ceil(str.length / n));
//      console.log(substr);
//    }
//  }
//}
//cutString(str, 3);

//19 Напишите функцию count(str, stringsearch), которая возвращает количество символов
//stringsearch в строке str.
//let symb = "о";
//let str = "Астрономия это наука о небесных объектах";
//let num = 0;
//function count(str, symb) {
//  for (let i = 0; i < str.length; i++) {
//    if (str[i] == symb) {
//      num++;
//    }
//  }
//  console.log(`В строке количество символов "${symb}" встречается ${num} раз`);
//}
//count(str, symb);

//20 Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.
//let str = "    Max is a good      boy     ";
//function strip(str) {
//  let str1 = "";
//  for (i = 0; i < str.length; i++) {
//    if (str[i] == " " && str[i + 1] == " ") {
//      str1 = str1;
//    } else {
//      str1 = str1 + str[i];
//    }
//  }
//  return str1.trim();
//}
//console.log(strip(str));

//21 Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str,
//оставив в ней n слов.
//let str = "Сила тяжести приложена к центру масс тела";
//function cutString(str, n) {
//  let arrStr = str.split(" ", n);
//  str = arrStr.join(" ");
//  return str;
//}
//console.log(cutString(str, 3));

//22 Напишите функцию alphabetize(str), которая возвращает строку, отсортировав её
//символы в алфавитном порядке.
//let str = "isckckajsndvckakb";
//function alphabetize(str) {
//  return str.split("").sort().join("");
//}
//console.log(alphabetize(str));

//23 Напишите функцию findWord(word, str), которая проверяет, существует ли в строке
//str слова word.
//let str = "abc def ghi jkl mno pqr stu";
//let word = "mno";
//function findWord(word, str) {
//  if (str.includes(word)) {
//    console.log(`В строке есть слово "${word}"`);
//  } else console.log(`В строке нет слова "${word}"`);
//}
//findWord(word, str);

//24 Напишите функцию stringToarray(str), которая преобразует строку в массив слов.
//let str = "Каждый охотник желает знать";
//function stringToarray(str) {
//  let arrStr = str.split(" ");
//  return arrStr;
//}
//console.log(stringToarray(str));

//25 Создать объект с начальным полем title. Добавить поле с ключом description
//начальным значением строкой. Добавить метод addField, который при вызове добавляет
//новое поле в объект с переданным именем и значением addField(fieldName, value),
//добавить метод editField(fieldName, value), который меняет указанное свойство объекта.
//Добавить метод удаление свойства deleteField(fieldName), удаляющий указанное поле.
//Добавить и изменить поля с помощью этих методов.
//читаю тут https://learn.javascript.ru/object-methods
//let obj = {
//  title: "заголовок",
//};
//obj.description = "какая то строка";
//console.log(obj);
//obj = {
//  addField(fieldName, value) {},
//};
//obj.addField("text", "ghghghg");
//console.log(obj);
//obj = {
// editField(fieldName, value) {},
//};
//obj.editField("text", "прпрпрпрпрп");
//console.log(obj);
//obj = {
//  deleteField(fieldName) {},
//};
//obj.deleteField("text");
//console.log(obj);

//26 Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает
//целое число и возвращает сумму его цифр.
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

//27 Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте
//вспомогательную функцию getDigitsSum из предыдущей задачи.
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

//28 Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его
//цифры. И так, пока сумма не станет однозначным числом (9 и менее).
//let digit = 555555;
//function getDigitsSum(digit) {
//  let sum = 0;
//  let arrDigit = String(digit).split("");
//  //console.log(arrDigit); //для проверки адекватности логики))
//  for (let i of arrDigit) {
//    sum = sum + +i;
//    //console.log(sum); //для проверки адекватности логики))
//  }
//  if (sum > 9) {
//    return getDigitsSum(sum);
//  }
//  return sum;
//}
//console.log(getDigitsSum(digit));

//Последние две задачи из практики в презентации
//(первую решили на занятии, вторая такая же как под номером 8)
//Реализовать функцию которая заменяет в строке str, все вхождения подстроки
//find, на подстроку replace.
//let str = "Мне больно видеть белый тополь";
//let find = "тополь";
//let replace = "свет";
//function findWord(find, replace, str) {
//  if (str.includes(find)) {
//    console.log(str.replace(find, replace));
//  } else console.log(`В строке нет слова "${find}"`);
//}
//findWord(find, replace, str);

//Реализовать функцию которая будет принимать числовой диапазон в качестве
//параметров [min, max] и будет возвращать случайное целое число из данного диапазона.min
//let min = 1;
//let max = 20;
//function rand(min, max) {
//  return Math.floor(min + Math.random() * max);
//}
//console.log(rand(min, max));
