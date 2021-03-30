/*
Программа:
1. Вопросы
2. Кахуты
3. Теория: Массивы
5. Примеры 
*/

/*
Пример 1 - базовые операции с массивом

Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Код для замены значения в середине должен работать для массива любой длины.
Удалите первый элемент и выведите его в консоль.
Вставьте «Рэп» и «Регги» в начало массива.
Массив по ходу выполнения операций:

Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл
*/

const styles = ['Джаз', 'Блюз']
console.log(styles)
styles.push('Рок-н-ролл')
console.log(styles)
styles[Math.floor(styles.length / 2)] = 'Классику'
console.log(styles)
const firstElem = styles.shift()
console.log(firstElem, styles)
styles.unshift('Рэп', 'Рэгги')
console.log(styles)
const lastElem = styles.pop()
console.log(lastElem, styles)



/*
Пример 2 - Перебор массива
Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате <номер элемента> - <значение элемента>. Нумерация элементов должна начинаться с 1.

Например для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.
*/

function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`)
    }
}

logItems(['Mango', 'Poly', 'Ajax'])


/*
Пример 3 - Сортировка массива с циклом, без Array.prototype.sort() Пузырьком
Вернуть отсортированную копию по алфавиту (не меняя исходный массив)

const arr = ["HTML", "JavaScript", "CSS"];  
*/

function bubbleSort (array) {
    for (let i = 0; i < array.length; i++) {
        // console.log('Iteration=' + i,  'array=' + array)
        for (let j = i + 1; j < array.length; j++) {
            // console.log('Iteration=' + i, 'Inner iteration=' + j,  'array=' + array)
            if (array[i] > array[j]) {
                const temporary = array[j]
                array[j] = array[i]
                array[i] = temporary
            }
        }
    }
}
const arr = [1, 2, 5, -11, 20, 11, 1]
bubbleSort(arr)
console.log(arr)
/*
Пример 5 - Поиск элемента
Напиши функцию findLargestNumber(numbers)которая ищет самое большое число в массиве.
*/

function findLargestNumber (numbers) {
    let max = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        max = numbers[i] > max ? numbers[i] : max
    }
    return max
}

function findLargestString (strings) {
    let max = strings[0]
    for (let i = 1; i < strings.length; i++) {
        if (strings[i].length > max.length) {
            max = strings[i]
        }
    }
    return max
}

function findLargestNumber_ForOf (numbers) {
    let max = numbers[0]
    for (let number of numbers) {
        if (number > max) {
            max = number
        }
    }
    return max
}

console.log(findLargestNumber([10, 3, 5, 11]))
const stringsArray = 'Напиши функци calculateAverage() которая '.split(' ')
console.log('Самая большая строка: ', findLargestString(stringsArray))

/*
Пример 6 - 
Напиши функцию calculateAverage() которая принимает массив и возвращает  среднее значение его элеменитов
*/

function calculateAverage(numbers) {
    let total = 0
    for (let number of numbers) {
        total += number
    }
    return total / numbers.length
}

console.log(calculateAverage([1,2,3,4,5]))
