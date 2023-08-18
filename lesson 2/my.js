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

//
