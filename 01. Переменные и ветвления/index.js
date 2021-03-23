/*
Программа:
1. Знакомство
2. Вопросы в excel
3. Kahoot
4. Новые вопросы
5. Примеры
*/

// #1 Typeof
console.log('/////////// TYPEOF')
console.log(typeof 'test')
console.log(typeof 23)
console.log(typeof undefined)
console.log(typeof null)

// #2 Базовые операторы +,-,*,/ и приоритет 
console.log('/////////// Базовые операторы +,-,*,/ и приоритет')
const women = 10
const men = 10

const total = (women + men + men - women) * 5 / 10
console.log(total)

// #3 Обьект Math
console.log('/////////// Обьект Math')
const rad = 10
const area = Math.PI * Math.pow(rad, 2)
console.log(area)

// #4 Шаблонные строки
console.log('/////////// Шаблонные строки')
const username = 'Arthur'
const second = 'A1T'

console.log(username + ' Привет! ' + second)
console.log(`${second === 'AT' ? 'Админ' : 'Юзер'} Привет! ${second}`)

// #5 Операторы сравнения и приведение типов
console.log('/////////// Операторы сравнения и приведение типов')
console.log(5 > 1) // true
console.log(22 <= 1) // false 
console.log(65 < 99) // true
console.log(12 >= 1) // true
console.log(11 === 22) // false

console.log('5' === 5) // false
console.log('5' == 5) // true 
console.log('0' == false) // true

console.log('' === false) // false
console.log(undefined === null) // false

const role = 'admin'
const filteredRole = 'admin'

console.log(role === 'admin') // true

if (role !== filteredRole) {
    console.log('you r not filtered')
}

// #6 if-else. Тернарный оператор
console.log('/////////// if-else. Тернарный оператор')
let cash

if (role !== filteredRole) {
    cash = 10
} else {
    cash = 100
}

cash = role !== filteredRole ? 10 : 100
console.log(cash) // 100

role !== filteredRole ? console.log('123') : console.log('durackiy code')

if (role !== filteredRole) {
    console.log('123') 
} else {
    console.log('okey code')
}

// #7 Логические операторы
console.log('/////////// Логические операторы')
const isAdmin = true
const canEdit = false

const isAdminAndCanEdit = isAdmin && canEdit

console.log(isAdminAndCanEdit) // false
console.log(isAdmin || canEdit) // true
console.log(!isAdmin) // false

console.log(isAdmin && 'Hello, admin how u r') // Hello, admin how u r
console.log(12 && 10) // 10
console.log(0 && 'test') // false

const test = 0 || 100
console.log(test) // 100
console.log(!!0) // true
console.log(!!false) // false

// #8 Опертор % - остаток от деления
console.log('/////////// Опертор % - остаток от деления')
console.log(10 % 3) // 1
console.log(10 % 2) // 0
console.log(10 % 5) // 0

const totalMinutes = 130
const hours = Math.floor(totalMinutes / 60)
const minutes = totalMinutes % 60

console.log(hours, minutes)

for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}