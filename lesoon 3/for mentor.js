//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i <= 9; i++) {
    document.write(`<div><h3>priwet mentor</h3></div>`);
}
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let x = 0; x < 10; x++) {
    document.write("<div>Блок " + x + ": Довільний текст</div>");
}
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let q = 0;
while (q<20){
    q++;
    document.write(`<div><h1>mentor the best</h1></div>`);
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let w = 0;
while (w<20){
    w++;
    document.write("<div>Блок "+ w +": довільний текст</div>")
}

//є масив
//за допомоги циклу вивести:
    //- користувачів зі статусом true
//- користувачів зі статусом false
//- користувачів які старші за 30 років
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'sanya', age: 31, status: false},
    {name: 'maxim', age: 31, status: true}
];

for (let a = 0; a<users.length; a++){
    if (users[a].status === false){
        document.write(`<h3>${users[a].name}--${users[a].status}</h3>`);
    }
}

for (let b = 0;b<users.length;b++){
    if (users[b].status ===true){
        document.write(`<h3>${users[b].name}---${users[b].status}</h3>`)
    }
}
for (let n = 0; n<users.length;n++){
    if (users[n].age>=30){
       document.write(`<h3>${users[n].name}---${users[n].age}</h3>`)
    }
}



//- Використовуючи данні з масиву, за допомоги document.write та циклу
//побудувати структуру по шаблону
//Масив:

    let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
    document.write("<ul>");
    for (let i = 0;i<listOfItems.length;i++){
    document.write("<li>" +listOfItems[i] + "</li>");
    }
    document.write("</ul>")


//Використовуючи данні з масиву, за допомоги document.write та циклу
//побудувати структуру по шаблону
//Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products =  [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (let o =0;o<products.length;o++){
    const produkt = products[o];
    document.write(`<div class="product-card">
        <h3 class="product-title">Title - ${produkt.title}
         Price - ${produkt.price}</h3>
        <img src="${produkt.image}" alt="" class="product-image">
    </div>`)
}
