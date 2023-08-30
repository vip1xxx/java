const calculateArea = (a, b) => a * b;

const sideA = 5;
const sideB = 8;
const area = calculateArea(sideA, sideB);
console.log(`Площа прямокутника: ${area}`);
//----------------------------------------------
const Area = r => 3.141592653589793 * r * r;

const radius1 = 5;
const area1 = Area(radius1);
console.log(`Площа кола: ${area1}`);
//----------------------------------------------
const calculate = (r, h) => 2 * 3.141592653589793 * r * (r + h);

const radius2 = 3;
const height = 7;
const surfaceArea = calculate(radius2, height);
console.log(`Площа поверхні циліндра: ${surfaceArea}`);
//----------------------------------------------
const printArray = array => {
    array.forEach(element => {
        console.log(element);
    });
};

const myArray1 = [1, 2, 3, 4, 5];
printArray(myArray1);
//----------------------------------------------

//----------------------------------------------
const minNumber = array => array.reduce((min, current) => (current < min ? current : min));

const numbers = [10, 5, 8, 3, 12, 7];
const minNumbers = minNumber(numbers);
console.log(`Найменше число: ${minNumbers}`);
//----------------------------------------------
const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};


const myArray = [1, 2, 3, 4, 5];
console.log("Початковий масив:", myArray);

swap(myArray, 1, 3);
console.log("після обміну:", myArray);