
// // task 1

// let password = 'пароль'
// let question = prompt('введите пароль')
// if (question == password) {alert('пароль введен верно')

// } else {alert('пароль неверный')

// }

// // task 2

// let c = 2
// let result = (c > 0 && c < 10) ? 'correct' : 'wrong'
// console.log(result);

// // task 3

// let d = 10
// let e = 101
// let result = (d > 100 || e > 100) ? 'true' : 'false'
// console.log(result);

// // task 4

// let a = '2';
// let b = '3';
// alert(+a + +b);

// // task 5

// let monthNumber = Number(prompt('какой сейчас месяц по счету?'))

// switch (monthNumber) {
//     case 1:
//     case 2:
//     case 12:
//         console.log('winter');
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log('spring');
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log('summer');
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log('autumn');
//         break;

//     default:
//         console.log('error');
//         break;
// }

// // task 7

// let value = prompt('введите любое число')

// value = Math.abs(Number(value))
// console.log(value);
// if (value%2==0) {alert('число четное')

// } else if (value%2==1) {alert('число нечетное')
// }
// else {alert('это не число')

// }

// // task 8

// let clientOS = Number(prompt('1-android, 0-ios'))
// switch (clientOS) {
//     case 0:
//         console.log('Установите версию приложения для iOS по ссылке');
//         break;
//     case 1:
//         console.log('Установите версию приложения для Android по ссылке');
//         break;
//     default:
//         break;
// }

// // task 9

// let clientOS = Number(prompt('1-android, 0-ios'))
// let clientDeviceYear = Number(prompt('год выпуска вашего телефона'))

// if (clientOS == 0 && clientDeviceYear >= 2015) {alert('Установите версию приложения для iOS по ссылке')}
// else if (clientOS == 0 && clientDeviceYear < 2015) { alert('Установите облегченную версию приложения для iOS по ссылке') }
// else if (clientOS == 1 && clientDeviceYear >= 2015) { alert('Установите версию приложения для Android по ссылке') }
// else if (clientOS == 1 && clientDeviceYear < 2015) { alert('Установите облегченную версию приложения для Android по ссылке') }
// else {}

// Homework 4

// // task 1

// let x = 1
// while (x < 3) {
//     alert('hi')
//     x++
// }

// // task 2

// let y = 1
// while (y < 6) {
//     console.log(y)
//     y++
// }

// // task 3

// for (let index = 7; index < 23; index++) {
//    console.log(index);

// }

// // task 4

// let obj = {
//     'Коля': 200,
//     'Вася': 300,
//     'Петя': 400,
// }
// for (key in obj) {
//     alert(`${key} - зарплата ${obj[key]} долларов`)
// }

// // task 5


// let n = 1000
// let num = 0
// while (n > 50) {
//     num++
//     n = n/2
// }
// console.log(n);
// console.log(num);

// // task 6 ?????????

// let friday = 7
// for (let day = 1; day <= 31; day++) {

//     if ((day - friday) % 7 == 0) {
//         console.log(`сегодня пятница ${day} число - заполните отчетность`);
//     }
// }


// // Homework 5

// // task 1

// function count(a, b) {
//     if (a > b) {
//         return a

//     } else {
//         return b

//     }
// }

// console.log(count(7, 5));

// // task 2

// function check(num) {
//     if (num % 2 == 0) {
//         return 'число четное'

//     } else {
//         return 'число нечетное'

//     }
// }

// console.log(check(2023));

// // task 3


// const counter = (rootCounter) => {
//     return rootCounter ** 2
// }


// console.log(counter(12));

// // task 4

// function greetingForm() {
//     let userAnswer = prompt('Сколько вам лет?')

//     if (userAnswer <= 0 || isNaN(userAnswer)) {
//         return alert('вы ввели неправильное число')

//     } else if (userAnswer > 0 && userAnswer < 13) {
//         return alert('Привет, друг!')

//     }
//     else { return alert('Здравствуйте!') }
// }

// greetingForm()

// // task 5


// function notANumber(a, b) {

//     if (isNaN(a) || isNaN(b)) {
//         return alert('одно или оба значения не являются числом')

//     } else {
//         return alert(a * b)
//     }

// }

// notANumber(3, 4)

// // task 6

// function cubeCounter() {
//     let addedAmount = prompt('введите число от 0 до 10')

//     if (isNaN(addedAmount)) {
//         return alert(' значениe не являeтся числом')

//     }
//     else {
//        return alert(`${addedAmount} в кубе = ${addedAmount ** 2}`)
//     }
// }

// cubeCounter()

// // task 7

// function getCircleArea() {
//     return Math.PI * (this.radius ** 2)
// }

// function getCirclePerimeter() {
//     return 2 * Math.PI * this.radius
// }

// let circle1 = {
//     radius: 12,
//     getArea: getCircleArea,
//     getPerimeter: getCirclePerimeter,
// }

// let circle2 = {
//     radius: 33,
//     getArea: getCircleArea,
//     getPerimeter: getCirclePerimeter,
// }

// console.log(circle1.getArea());
// console.log(circle2.getArea());
// console.log(circle1.getPerimeter());
// console.log(circle2.getPerimeter());


// Homework 6

task 1

let arrow = [1, 5, 4, 10, 0, 3]

for (let i = 0; i < arrow.length; i++) {
    if (arrow[i] == 10) break
    console.log(arrow[i]);

}

// task 2

let numArrow = [1, 5, 4, 10, 0, 3]

console.log(numArrow.indexOf(4));


// task 3

let joinArrow = [1, 3, 5, 10, 20]

const summary = joinArrow.join(' ')
console.log(summary);

task 4

[[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]
let mass = []
for (let index = 0; index < 3; index++) {
    let mass2 = []

    for (let i = 0; i < 4; i++) {
        mass2.push(1)


    }
    mass.push(mass2)



}
console.log(mass);



// task 5

let pushArrow = [1, 1, 1]
pushArrow.push(2, 2, 2)

console.log(pushArrow);

// task 6 ???

let arr = [9, 8, 7, 'a', 6, 5]

sortArr = arr.sort()
popArr = sortArr.pop()
console.log(popArr);
console.log(sortArr);

// task 7



// function numsCheck() {
//     let nums = [9, 8, 7, 6, 5]
//     question = prompt('введите число')
//     if (question = nums[key]) {
//         alert('содержится')

//     } else {
//         alert('не сожержится')

//     }
// }

// numsCheck()

// task 8

let string = 'abcdef'
let arrStr = string.split('')
console.log(arrStr);
revStr = arrStr.reverse()
console.log(revStr)
let jArr = revStr.join('')
console.log(jArr);

// task 9

[[1, 2, 3,],[4, 5, 6]]

let arrow = [[1, 2, 3,],[4, 5, 6]]
let str = arrow.join(',').split(',')
console.log(str);

// task 10

let arrow = [6, 2, 3, 6, 5, 3, 4]
for (let i = 0; i < arrow.length; i++) {
  if (i < arrow.length - 1) {
    console.log(arrow[i] + arrow[i + 1]);
  } else {
    console.log(arrow[i])
  }

}



// task 11


let array = [2, 3, 4, 5]
let array2 = array.map(el => el ** 2)
console.log(array2);

// task 12


let someWords = ['hi', 'how', 'are', 'you', '?']
let symbolWords
function countingSymbols() {
  let wordsSplit = someWords.map(el => (el.split('')))
  symbolWords = wordsSplit.map(el => el.length)
  return symbolWords
}

countingSymbols(someWords)
console.log(symbolWords)

task 13

let numbers = [1, 2, -10, 5, -7, 8, -2]
 let negative
function negativeNumbers () {
  negative = numbers.filter(el => (el < 0))
  return negative
}
negativeNumbers(numbers)

console.log(negative);
