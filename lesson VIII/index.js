//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [];

for (let i = 1; i <= 10; i++) {
    let newUser = new User(
        i, // id
        "Ім'я " + i, // name
        "Прізвище " + i, // surname
        "email" + i + "@example.com", // email
        "телефон " + i // phone
    );
    users.push(newUser);
}
console.log(users);
//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filteredUsers = users.filter(function(user) {
    return user.id % 2 === 0;
});
console.log(filteredUsers);
//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
users.sort(function(a, b) {
    return a.id - b.id;
});
console.log(users);
//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// Створення пустого масиву для зберігання клієнтів
let clients = [];

// Наповнення масиву 10 об'єктами Client
for (let i = 1; i <= 10; i++) {
    let client = new Client(
        i, // id
        "Ім'я " + i, // name
        "Прізвище " + i, // surname
        "email" + i + "@example.com", // email
        "телефон " + i, // phone
        [] // пустий масив для поля order
    );
    clients.push(client);
}
console.log(clients);
//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
clients.sort(function(a, b) {
    return a.order.length - b.order.length;
});

console.log(clients);
//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//- (Те саме, тільки через клас)
// Створення функції конструктора Car
function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.driver = null;

    this.drive = function() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    this.info = function() {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key} - ${this[key]}`);
            }
        }
    };

    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
    };

    this.changeYear = function(newValue) {
        this.year = newValue;
    };

    this.addDriver = function(driver) {
        this.driver = driver;
    };
}

let myCar = new Car('Civic', 'Honda', 2022, 200, 1.5);

myCar.drive();

myCar.info();

myCar.increaseMaxSpeed(20);

myCar.changeYear(2023);

let driverInfo = {
    name: 'John Doe',
    age: 30,
    licenseNumber: '123456',
};

myCar.addDriver(driverInfo);

console.log(myCar);
//Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class auto {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
        this.driver = null; // Змінна для зберігання об'єкта "водій"
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key} - ${this[key]}`);
            }
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

const myCar1 = new Car('AMG', 'MERSEDES', 2022, 200, 1.5);

myCar1.drive();

myCar1.info();

myCar1.increaseMaxSpeed(20);

myCar1.changeYear(2023);

const driverInfo1 = {
    name: 'John Doe',
    age: 30,
    licenseNumber: '123456',
};

myCar.addDriver(driverInfo1);

console.log(myCar1);
//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// Клас Попелюшка
