/*
Программа:
1. Вопросы
2. Кахуты
3. Теория: области видимости
4. Теория: Циклы
5. Теория: Switch case
6. Примеры 
*/

// Бесконечный цикл. ВАЖНО И ОБЯЗАТЕЛЬНО - нужно условие выхода из такого цикла
let infinityLoopIndex = 0
for (;;) {
    if (infinityLoopIndex >= 10) { // момент, где мы выходим из цикла
        break
    } else {
        console.log('hello')
    }
    infinityLoopIndex++
}


// Таблица умножения 
for (let i = 1; i < 10; i++) {
    console.log('ITERATION ______ ', i)
    for (let j = 1; j < 10; j++) {
        // j = 1
        // j = 2
        // ... j = 9
        console.log(`${i} x ${j} = ${ i * j }`)
    }
}

// Вывести все четные числа
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// Вывести все четные числа с continue
for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        continue
    }
    console.log(i)
}


// То же самое, только на while
let i = 0
while (i < 10) {
    i+=1
    if (i % 2 !== 0) {
        continue
    }
    console.log(i)
}


// switch...case
const switchMe = 'foo'

switch (switchMe) {
    case 'bar':
    case 123: 
        console.log('bar')
        break
    case 'foo':
        console.log('u r here')
    default: 
        console.log('default')
}

// Как переписать switch...case на if...else
if (switchMe === 'bar' || switchMe === 123) {
    console.log('bar')
} else if (switchMe === 'foo') {
    console.log('u r here')
} else {
    console.log('default')
}

// Напиши скрипт который просит посетителя ввести число в prompt до тех пор, 
// пока посетитель на нажмет Cancel, и каждый раз добавляет введенное значение к общей сумме.

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.
// Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не нужно


let total = 0
let inputData

do {
    inputData = prompt('vvedi chislo')

    if (inputData) {
        total += Number(inputData)
    } else {
        alert(total)
    }
} while (inputData)