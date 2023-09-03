//- Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'
let string1 = 'hello world';
let string2 = 'lorem ipsum';
let string3 = 'javascript is cool';

let length1 = string1.length;
let length2 = string2.length;
let length3 = string3.length;

console.log('Довжина рядка "' + string1 + '": ' + length1);
console.log('Довжина рядка "' + string2 + '": ' + length2);
console.log('Довжина рядка "' + string3 + '": ' + length3);
//- Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'
let strin1 = 'hello world';
let strin2 = 'lorem ipsum';
let strin3 = 'javascript is cool';

let uppercaseString1 = strin1.toUpperCase();
let uppercaseString2 = strin2.toUpperCase();
let uppercaseString3 = strin3.toUpperCase();

console.log(uppercaseString1);
console.log(uppercaseString2);
console.log(uppercaseString3);
//- Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str1 = 'HELLO WORLD';
let str2 = 'LOREM IPSUM';
let str3 = 'JAVASCRIPT IS COOL';

let lowercaseStr1 = str1.toLowerCase();
let lowercaseStr2 = str2.toLowerCase();
let lowercaseStr3 = str3.toLowerCase();

console.log(lowercaseStr1);
console.log(lowercaseStr2);
console.log(lowercaseStr3);
//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';

let cleanedStr = str.split(' ').filter(function(word) {
    return word.trim() !== '';
}).join(' ');

console.log(cleanedStr);
//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//    let str = 'Ревуть воли як ясла повні';
//let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
function stringToarray(str) {
    let newArray = str.split(' ');
    return newArray ;
}

let strng = 'Ревуть воли як ясла повні';

let arr = stringToarray(strng);
console.log(arr);
//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//    let nums = [11,21,3];
//sortNums(nums,'ascending') // [3,11,21]
//sortNums(nums,'descending') // [21,11,3]
//==========================
let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

let strings = numbers.map(function(num) {
    return num.toString();
});

console.log(strings);
function sortNums(nums, direction) {
    if (direction === 'ascending') {
        return nums.sort(function(a, b) {
            return a - b;
        });
    } else if (direction === 'descending') {
        return nums.sort(function(a, b) {
            return b - a;
        });
    } else {
        return nums;
    }
}

let nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));
//- є масив
//let coursesAndDurationArray = [
//    {title: 'JavaScript Complex', monthDuration: 5},
//    {title: 'Java Complex', monthDuration: 6},
//    {title: 'Python Complex', monthDuration: 6},
//    {title: 'QA Complex', monthDuration: 4},
//    {title: 'FullStack', monthDuration: 7},
//    {title: 'Frontend', monthDuration: 4}
//];
//-- відсортувати його за спаданням за monthDuration
//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//=========================
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.sort(function(a, b) {
    return b.monthDuration - a.monthDuration;
});

console.log(coursesAndDurationArray);
let filteredCourses = coursesAndDurationArray.filter(function(course) {
    return course.monthDuration > 5;
});

console.log(filteredCourses);
let transformedCourses = coursesAndDurationArray.map(function(course, index) {
    return { id: index + 1, title: course.title, monthDuration: course.monthDuration };
});

console.log(transformedCourses);
//    описати колоду карт (від 6 до туза без джокерів)
//- знайти піковий туз
//- всі шістки
//- всі червоні карти
//- всі буби
//- всі трефи від 9 та більше
//{
//    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//        value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//    color:'', // 'red','black'
//}
//=========================
let deckOfCards = [];

let suits = ['spade', 'diamond', 'heart', 'clubs'];
let values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];

for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
        let card = {
            cardSuit: suits[i],
            value: values[j],
            color: (suits[i] === 'heart' || suits[i] === 'diamond') ? 'red' : 'black'
        };
        deckOfCards.push(card);
    }
}

console.log(deckOfCards);

let aceOfSpades = deckOfCards.find(function(card) {
    return card.cardSuit === 'spade' && card.value === 'ace';
});

console.log(aceOfSpades);

let sixes = deckOfCards.filter(function(card) {
    return card.value === '6';
});

console.log(sixes);

let redCards = deckOfCards.filter(function(card) {
    return card.color === 'red';
});

console.log(redCards);

let clubs = deckOfCards.filter(function(card) {
    return card.cardSuit === 'clubs';
});

console.log(clubs);

let highValueTrefoils = deckOfCards.filter(function(card) {
    return card.cardSuit === 'clubs' && (card.value === '9' || card.value === '10' || card.value === 'jack' || card.value === 'queen' || card.value === 'king' || card.value === 'ace');
});

console.log(highValueTrefoils);
//    Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
//{
//    spades:[],
//        diamonds:[],
//    hearts:[],
//    clubs:[]
//}
//=========================
//----------------------------------
//    взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
//--написати пошук всіх об'єктів, в який в modules є sass
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let coursesWithSass = coursesArray.filter(course => course.modules.includes('sass'));

console.log(coursesWithSass);
//--написати пошук всіх об'єктів, в який в modules є docker
let coursesDocker = coursesArray.filter(course => course.modules.includes('docker'));
console.log(coursesDocker)