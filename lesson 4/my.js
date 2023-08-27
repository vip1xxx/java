//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calc (a,b){
    return a * b;
}
let numA = 20;
let numB = 2;
let area = calc(numA,numB)
console.log('Площа прямокутиника:',area);
//----------------------------------------------------------------------
//- створити функцію яка обчислює та повертає площу кола з радіусом r
function calcR(r){
    return 3.15 * r * r;
}
let radius = 3;
let result = calcR(radius)
console.log('Площа кола:',result)
//------------------------------------------------------------------------
//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function calcH (h,r){
const circleArea = 3.15 * r * r;
const lateralArea = 2 * 3.15 * r * h;
return 2 * circleArea + lateralArea;
}
const h = 2;
const r = 2;
const  num = calcH(h,r);
console.log('Площа поверхні циліндра:',num)
//------------------------------------------------------------------------
//- створити функцію яка приймає масив та виводить кожен його елемент
function ArrayElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
const myArray = [1, 2, 3, 4, 5];
ArrayElements(myArray);
//--------------------------------------------------------------------------
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
function writer(text){
    document.write(`<p>${text}</p>`)
}
writer('MENTOR THE BEST')
//---------------------------------------------------------------------------
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list(text) {
    document.write("<ul>");
    for (let i = 0; i < 3; i++) {
        document.write("<li>" + text + "</li>");
    }
    document.write("</ul>");
}
const mylist = "Привіт ментор,ти крутий дядько";
list(mylist);
//-----------------------------------------------------------------------------
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function list2(text, itemCount) {
    document.write("<ul>");
    for (let i = 0; i < itemCount; i++) {
        document.write("<li>" + text + "</li>");
    }
    document.write("</ul>");
}
const listText = "JAVASCRIPT важка штука";
const numberItems = 3;
list2(listText, numberItems);
//--------------------------------------------------------------------------------
//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function buildJavascriptArray(inputArray) {
    if (!Array.isArray(inputArray)) {
        throw new Error('Input must be an array');
    }

    let jsArray = '[';

    for (let i = 0; i < inputArray.length; i++) {
        const element = inputArray[i];

        if (typeof element === 'number') {
            jsArray += element;
        } else if (typeof element === 'string') {
            jsArray += `'${element}'`;
        } else if (typeof element === 'boolean') {
            jsArray += element.toString();
        } else {
            throw new Error(`Unsupported element type: ${typeof element}`);
        }

        if (i !== inputArray.length - 1) {
            jsArray += ', ';
        }
    }

    jsArray += ']';

    return jsArray;
}

const inputArray = [1, 'hello', true, 'world', false, 42];
const jsArrayString = buildJavascriptArray(inputArray);
console.log(jsArrayString);
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//НЕ ЗРОЗУМІВ
//- створити функцію яка повертає найменьше число з масиву
function findMinimumNumber(array) {
    if (!Array.isArray(array) || array.length === 0) {
    }

    let minimum = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < minimum) {
            minimum = array[i];
        }
    }

    return minimum;
}

const numbers = [5, 3, 9, 1, 7, 2];
const minimumNumber = findMinimumNumber(numbers);
console.log(`Мінімальне число: ${minimumNumber}`);
//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    if (!Array.isArray(arr)) {
    }

    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
        }

        total += arr[i];
    }

    return total;
}

const numbers2 = [1, 2, 10];
const resultat = sum(numbers2);
console.log(`Сума: ${resultat}`);
//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    if (!Array.isArray(arr)) {
    }

    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
    }

    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    return arr;
}

const numbers3 = [11, 22, 33, 44];
swap(numbers3, 0, 1);
console.log(numbers3);
//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    if (typeof sumUAH !== 'number' || !Array.isArray(currencyValues) || typeof exchangeCurrency !== 'string') {
    }

    const exchangeRate = currencyValues.find(curr => curr.currency === exchangeCurrency);

    if (!exchangeRate) {
    }

    return sumUAH / exchangeRate.value;
}

const money = [
    { currency: 'USD', value: 40 },
    { currency: 'EUR', value: 42 }
];

const exchangedAmount = exchange(10000, money, 'USD');
console.log(exchangedAmount);