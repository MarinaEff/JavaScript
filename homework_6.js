// 29. Напишите функцию, которая возвращает новый объект без указанных значений.
// const user = {
// 	name: 'Дмитрий',
// 	city: 'Нижний Новгород',
// 	age: 27,
// }
// const without = (obj, field) => {
// 	delete obj[field];
// 	return obj;
// }
// console.log(without(user, 'city'));

// Дополнительно: реализовать удаление любого количества полей
// const user = {
// 	name: 'Дмитрий',
// 	city: 'Нижний Новгород',
// 	age: 27,
// }
// const without = (obj, ...field) => {
// 	for (let i=0; i<field.length; i++) {
// 		delete obj[field[i]];
// 	}
// 	return obj;
// }
// console.log(without(user, 'city','age'));


//30. Написать функцию, которая проверяет наличие поля в объекте.
// const user = {
// 	name: 'Дмитрий',
// 	city: 'Нижний Новгород'
// }
// const checkField = (obj, field) => {
// 	for (key in obj) {
// 		if (obj[key] === obj[field]) {
// 			return true;
// 		} return false;
// 	}
// }
// console.log(checkField(user, 'name')); //=> true
// console.log(checkField(user, 'lastname')); //=> false

// 31. Написать функцию, которая принимает число от 1 до 7 и 
// возвращает день недели. Решить с помощью объектов.
// const objWeek = {
// 	1: 'Понедельник',
// 	2: 'Вторник',
// 	3: 'Среда',
// 	4: 'Четверг',
// 	5: 'Пятница',
// 	6: 'Суббота',
// 	7: 'Воскресенье',
// }
// const getDayString = (num) => {
// 	return objWeek[num];
// }
// console.log(getDayString(3));
