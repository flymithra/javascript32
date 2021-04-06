/*
Программа:
1. Вопросы
2. Кахуты
3. Теория: Объекты
3.1. Rest и spread
4. Примеры 
*/


// Пример на вычисляемые свойства. Roles - addRole

const rolesController = {
    roles: {},
    addRole (role, permissions) {
        this.roles = Object.assign({ test: 123 }, this.roles, {
            [role]: permissions
        })
    }
}

rolesController.addRole('admin', ['can_edit'])
rolesController.addRole('moderator', ['can_view'])
console.log(rolesController)

// Пример 1 - Основы обьектов
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

const example1 = () => {
    const user = {
        name: 'Mango',
        age: 20,
        hobby: 'html',
        premium: true,
        parent: {
            name: 'Hala',
            second: 'Manga'
        }
    }

    user.mood = 'happy'
    user.hobby = 'skydiving'
    user.premium = false
    user.university = {
        state: 'Kyrgyzstan'
    }

    for (let key of Object.keys(user)) {
        console.log(`key=${key}, value=${user[key]}`)
    }
}

// example1()



// Пример 2 - метод Object.values()
// У нас есть объект, в котором хранятся зарплаты нашей команды. Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.

const example2 = () => {
    let sum = 0

    const salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }

    for (let value of Object.values(salaries)) {
        sum += value
    }

    return sum
}

// console.log(example2())



// Пример 3 - Массив объектов
// Напишите ф-цию calcTotalPrice(stones, stoneName), которая принимает массив обьектов и строку с названием камня. Ф-ция считает и возвращает общую стоимость камней с таким именем, ценой и количеством из обьекта

const stones = [
    { name: 'Изумруд', price: 1300, quantity: 4 },
    { name: 'Бриллиант', price: 2700, quantity: 3 },
    { name: 'Сапфир', price: 400, quantity: 7 },
    { name: 'Щебень', price: 200, quantity: 2 },
]

const calcTotalPrice = (stones, stoneName) => {
    // LOCAL
    let foundedStone = null
    const stone = 'test'

    for (let stone of stones) {
        console.log('ITERATION', stone)
        // LOCAL IN LOCAL
        if (stone.name === stoneName) {
            foundedStone = stone
            break
        }
    }

    return {
        name: foundedStone.name,
        totalPrice: foundedStone.quantity * foundedStone.price
    }
}

//GLOBAL
const stone = calcTotalPrice(stones, 'Сапфир')
console.log(`Камень: ${stone.name} total price=${stone.name}`)


// Пример 4 - Калькулятор и this
// Создайте объект calculator (калькулятор) с тремя методами:

// read(a, b)- запрашивает два значения и сохраняет их как свойства объекта.
// sum() - возвращает сумму сохранённых значений.
// mult() - перемножает сохранённые значения и возвращает результат.


const calculator = {
    a: null,
    b: null,

    read (a, b) {
        this.a = a
        this.b = b
    },

    sum () {
        return this.a + this.b
    },

    mult (a = this.a, b = this.b) { // Перечитать параметры по умолчанию
        return a * b
    }
}

calculator.read(10, 55)
console.log(calculator.mult())



// Пример 5 - Комплексные задачи
// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {},

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {},

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {},

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {},

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {},

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {},
// };
