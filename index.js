
//task 1
let a = 20
alert(a)
//task 2
let firstIphoneRelease = 2007
alert(`год выпуска первого IPhone ${firstIphoneRelease}`)
//task 3
let jsFounder = 'Brendan Eich'
alert(`создатель языка JavaScript ${jsFounder}`)
//task 4
let value1 = 10
let value2 = 2
alert(`10+2=${value1 + value2}`)
alert(`10-2=${value1 - value2}`)
alert(`10*2=${value1 * value2}`)
alert(`10/2=${value1 / value2}`)
//task 5
let result = 2 ** 5
alert(result)
//task 6
let c = 9
let d = 2
alert(c % d)
//task 7
let num = 1
num += 5
num -= 3
num *= 7
num /= 3
num++
num--
alert(num)
//task 8
let age = prompt('сколько вам лет?')
alert(age)
//task 9
let user = {
    name: 'Sergey', 
    userAge: 27,
    isAdmin: true,
    cityOfResidence: 'Sochi',
}
user.userAge = 28
delete(user.cityOfResidence) 
let info = prompt("Какую информацию хотите узнать о пользователе?")
alert(user.userAge)

//task 10
let userName = prompt('укажите ваше имя')
alert(`Привет,${userName}!`)