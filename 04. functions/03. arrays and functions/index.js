/*
Программа:
1. Вопросы
2. Кахуты
3. Теория: Ф-ции
5. Примеры 
*/

// Пример 0 - ф-ции min и ф-ция max
const max = (a, b) => a > b ? a : b
const min = (a, b) => a < b ? a : b
const maxFn = function (a, b) {
    return a > b ? a : b
}

// console.log(max(1, 10), min(-5, 20))

// Пример 1 - Поиска самого длинного слова
// Напиши ф-цию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.


const findLongestWord = (str) => {
    const splittedString = str.split(' ')
    let maxWord = splittedString[0]

    for (let i = 1; i < splittedString.length; i++) {
        if (splittedString[i].length > maxWord.length) {
            maxWord = splittedString[i]
        }
    }

    return maxWord
}

// console.log(findLongestWord('Дефолтные значения параметров функции'))

// Пример 2 - Дефолтные значения параметров функции
// Напишите функцию greet(name), которая при вызове будет получать имя (например, «Василий») и логировать строку «Привет, <имя>». В случае отсутствующего аргумента выводить «Привет, гость»

const greet = function (name) {
    return `Привет, ${name}`
}

// console.log(greet())
// console.log(greet('Наталья'))

// Пример 3 - Псевдомассив arguments
// Напишите функцию calculateAverage() которая принимает произвольное кол-во аргументов и возвращает их среднее значение. Все аругменты будут только числами.

const calculateAverage = function () {
    let total = 0

    // for (let i = 0; i < arguments.length; i++) {
    //     total += arguments[i]
    // }

    for (let i of arguments) {
        total += i
    }

    return total / arguments.length
}

console.log(calculateAverage(1,2,4,5,6))





// Пример 4 - Стрелочные функции (explicit return)

// Выполните рефакторинг заменив объявление функции на стрелочную функцию.

function checkNumbers(a, b) {
  if (a > b) {
    return `число ${a} больше ${b}`;
  } else {
    return `число ${b} больше ${a}`;
  }
}

const checkNumbersRefFn = (a, b) => {
    return a > b ? `число ${a} больше ${b}` : `число ${b} больше ${a}`
}

function doSmth(a, b) {
    return a > b
}



// Пример 5 - Стрелочные функции (implicit return)
// Выполните рефакторинг заменив объявление функции на стрелочную функцию.

function mult(x, y, z) {
  return x * y * z;
}

const multArrow = (x, y, z) => x * y * z 
console.log(multArrow(1,2,3))


// Пример 6 - Коллекция курсов (includes, indexOf, push и т. д.)
// Напишите функции для работы с коллекцией обучающих курсов courses:

// addCourse(name) - добавляет курс в конец коллекции
// removeCourse(name) - удаляет курс из коллекции
// updateCourse(oldName, newName)- изменяет имя на новое

// cost courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// addCourse('Express'); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас уже есть такое курс'
// removeCourse('React'); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс с таким имененем не найден'
// updateCourse('Express', 'NestJS'); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL']

const addCourse = (name) => {
    if (courses.includes(name)) {
        console.log('У вас уже есть такое курс')
    } else {
        courses.push(name)
    }
}

const removeCourse = (name) => {
    const courseIndex = courses.indexOf(name);
    if (courseIndex) {
        courses.splice(courseIndex, 1);
    } else {
        console.log('Курс с таким имененем не найден')
    }
};
  
const updateCourse = (newName, oldName) => {
    const courseIndex = courses.indexOf(oldName)
    courses.splice(courseIndex, 1, newName)
}

addCourse('Express')
// console.log(courses)
removeCourse('CSS')
// console.log(courses)
updateCourse('Angular', 'JavaScript')
// console.log(courses)
// Метки

// const min = 2;
// const max = 28;

// nextNumber:
// for (let i = min; i <= max; i += 1) {
//     for (let j = 2; j < i; j += 1) {
//         if (i % j === 0) {
//             continue nextNumber;
//         }
//     }
//     console.log(`простое ${i} =`,i);
// }

const isPrime = (number) => {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}

const getPrimes = (from, to) => {
    for (let i = from; i < to; i++) {
        if (isPrime(i)) {
            console.log(`простое ${i} =`, i)
        }
    }
}

getPrimes(2, 20)