
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
//     'Коля':200,
//     'Вася':300,
//     'Петя':400,
// }
// for (key in obj){
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

// // task 6


// for (let friday = 2; friday <= 31; friday++) {

//     if (friday += 7) {
//         console.log(`сегодня пятница ${friday} число - заполните отчетность`);
//     }



// Homework 5

// task 1

function count(a, b) {
    if (a > b) {
        return a

    } else {
        return b

    }
}

console.log(count(7, 5));

// task 2

function check(num) {
    if (num % 2 == 0) {
        return 'число четное'

    } else {
        return 'число нечетное'

    }
}

console.log(check(2023));

// task 3


const counter = (rootCounter) => {
    return rootCounter ** 2
}


console.log(counter(12));

// task 4

function greetingForm(question) {
    let userAnswer = prompt(question)
    
    if (userAnswer <= 0 || isNaN(userAnswer)) {
        return alert('вы ввели неправильное число')

    } else if (userAnswer > 0 && userAnswer < 13) {
        return alert('Привет, друг!')

    }
    else { return alert('Здравствуйте!') }
}

greetingForm('Сколько вам лет?')

// task 5


function notANumber(a, b) {

    if (isNaN(a) || isNaN(b)) {
        return alert('одно или оба значения не являются числом')

    } else {
        return alert(a * b)
    }

}

notANumber(3, 4)



