// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let list = [
    'Ukraine',
    'England',
    'France',
    'Italy',
    'Germany',
    'Poland',
    'Croatia',
    'Turkey',
    'Greece',
    'Portugal'
]
console.log(list);
console.log(list[0]);
console.log(list[1]);
console.log(list[2]);
console.log(list[3]);
console.log(list[4]);
console.log(list[5]);
console.log(list[6]);
console.log(list[7]);
console.log(list[8]);
console.log(list[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'The Great Gatsby',
    pageCount: 250,
    genre: 'novel'
}
console.log(book1);

let book2 = {
    title:'Treasure Island',
    pageCount: 300,
    genre: 'fantasy'
}
console.log(book2);

let book3 = {
    title:'Dracula',
    pageCount: 200,
    genre: 'fantasy'
}
console.log(book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let books1 = {
    title: 'The Great Gatsby',
    pageCount: 250,
    genre: 'novel',
    authors: [
        { name: "F. Scott Fitzgerald", age: 44 }
    ]
}
console.log(books1.authors)
let books2 = {
    title: 'The Great Gatsby',
    pageCount: 250,
    genre: 'novel',
    authors: [
        { name: "Scott Fitzgerald", age: 49 }
    ]
}
console.log(books2.authors)

let books3 = {
    title: 'The Great Gatsby',
    pageCount: 250,
    genre: 'novel',
    authors: [
        { name: "Harper Lee", age: 59 }
    ]
}
console.log(books3.authors)


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users =[
    {name:'Vasya', username:'1', password:1234678},
    {name:'Tolik', username:'2', password:1234546},
    {name:'Sanya', username:'3', password:1232446},
    {name:'Oleg', username:'4', password:12300},
    {name:'Serj', username:'5', password:12354765},
    {name:'Anna', username:'6', password:1234865},
    {name:'Kolya', username:'7', password:123436},
    {name:'Vasya', username:'8', password:1235787},
    {name:'Vika', username:'9', password:12324545},
    {name:'Sonya', username:'10', password:123678069}
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password)

// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = prompt("Введіть значення x:");

if (x !== 0) {
    console.log("Вірно");
} else {
    console.log("Невірно");
}


let numbers = [1, 0, -3];

for (let i = 0; i < numbers.length; i++) {
    let a = numbers[i];

    if (a !== 0) {
        console.log("Для a =", a, "виведеться 'Вірно'");
    } else {
        console.log("Для a =", a, "виведеться 'Невірно'");
    }
}

// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = prompt("Введіть кількість хвилин:");
if (isNaN(time)) {
    console.log("Введене значення не є числом");
} else {
    // Перевірка до якої чверті години попадає вказана кількість хвилин
    if (time >= 0 && time <= 59) {
        let quarter = Math.floor(time / 15) + 1;
        console.log("Часова чверть:", quarter);
    } else {
        console.log("Введіть коректне значення хвилин (0-59)");
    }
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = prompt("Введіть число від 1 до 31:");

// Перевірка на вірність введених даних
if (isNaN(day)) {
    console.log("Введене значення не є числом");
} else {
    day = parseInt(day);

    // Перевірка на коректність введеного числа
    if (day >= 1 && day <= 31) {
        let decade = Math.ceil(day / 10);
        console.log("Половина (декада) місяця:", decade);
    } else {
        console.log("Введіть коректне значення числа (1-31)");
    }
}

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayNumber = parseInt(prompt("Введіть порядковий номер дня тижня (1-7):"));

switch (dayNumber) {
    case 1:
        console.log("Понеділок - зустріч з колегами.");
        break;
    case 2:
        console.log("Вівторок - тренування в спортзалі.");
        break;
    case 3:
        console.log("Середа - зустріч з друзями.");
        break;
    case 4:
        console.log("Четвер - робочий день в офісі.");
        break;
    case 5:
        console.log("П'ятниця - вечірка з колегами.");
        break;
    case 6:
        console.log("Субота - відпочинок і релакс.");
        break;
    case 7:
        console.log("Неділя - сімейний день.");
        break;
    default:
        console.log("Некоректний номер дня тижня. Введіть число від 1 до 7.");
}

// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let num1 = parseFloat(prompt("Введіть перше число:"));
let num2 = parseFloat(prompt("Введіть друге число:"));

if (isNaN(num1) || isNaN(num2)) {
    console.log("Введене значення не є числом");
} else {
    if (num1 > num2) {
        console.log("Максимальне число:", num1);
    } else if (num2 > num1) {
        console.log("Максимальне число:", num2);
    } else {
        console.log("Введені числа рівні.");
    }
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let xx1 = [];
if(xx1 === false || xx1 === null || xx1 === 0 || xx1 === undefined || xx1 === '') {
    xx1 = "default";
    console.log(xx1)
}else console.log(xx1)



// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const course of coursesAndDurationArray) {
    if (course.monthDuration > 5) {
        console.log(`${course.title}: Супер`);
    }
}