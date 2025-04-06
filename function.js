// Функции 
function sayMyName() {
    console.log('hisenberg');
}
// функцию sayMyName именовываем как hisenberg
// 🔹 function — ключевое слово, с помощью которого создаётся функция.

// 🔹 sayMyName — имя функции. Это имя можно использовать позже, чтобы вызвать функцию.

// 🔹 () — круглые скобки, в которые можно передавать параметры (в данном случае — они пустые, значит параметры не нужны).

// 🔹 { ... } — фигурные скобки определяют тело функции, то есть тот код, который выполнится при её вызове.

// 🔹 console.log('hisenberg'); — тело функции, которое в данном случае просто выводит строку 'hisenberg' в консоль.

// 📌 Вызов функции:

// Чтобы выполнить этот код (иначе говоря — "вызвать функцию"), нужно написать:

sayMyName();

// Функции через переменные
let sayMyAge = function() {
    console.log(30);
}

// Аргументы
function showMyCity(city) {
console.log(city);
}

showMyCity('almalyk');
showMyCity('buenos-aires');

// Return - функция может вернуть значение (мы передаем аргумент num как @5@)
function x2(num) {
    // console.log(num*2);
    return num*2
}
let result = x2(5);
console.log(result);

function favoriteAnimal(animal) {
    return animal + ' is my favorite animal!'
  }
  console.log(favoriteAnimal('Sheep'))


  // Напишите функцию с именем add7, которая принимает одно число и возвращает это число + 7.
  function add7 (num) {
return num + 7 
  }
  console.log(add7(3)) + 7

  // Напишите функцию с именем multiply, которая принимает 2 числа и возвращает их произведение.
  function multiply (a, b) {
    return a * b
  }
  let result2 = multiply(3, 5);
  console.log(result2);

  // Напишите функцию с именем capitalize, которая принимает строку и возвращает эту строку с только первой буквой, написанной заглавной. Убедитесь, что она может принимать строки в нижнем регистре, ВЕРХНЕМ РЕГИСТРЕ или Обоими.

  