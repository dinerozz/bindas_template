// let array = []
// let object = {  
// } 
let arr = [ // массив, внутри массива объекты
    {
        name: 'Bakytzhan'
    },
    {
        title: 'Car'
    }
]

document.write(arr[0].name);

let obj = {
    name: 'Bakytzhan',
    description: 'He is 30 years old',
    age: 30
}
document.write('<br>')
document.write(`His name is ${obj.name}`)
document.write('<br>')
document.write(`Desc about him: ${obj['description']}`)
document.write('<br>')
document.write(`His age is ${obj.age}`)
document.write('<br><hr>');
// for(start; end; action)
// for(let item of students)
let students = [
    {
        id: 1,
        name: 'Marina',
        age: 40,
        img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
    },
    {
        id: 2,
        name: 'Murat',
        age: 20,
        img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
    },
    {
        id: 3,
        name: 'Nursultan',
        age: 25,
        img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
    },
    {
        id: 4,
        name: 'Magzhan',
        age: 25,
        img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
    }
]
let sum = 0;
let max = 0;
for(let i=0; i<students.length; i++){
    if(students[i].age>max){
    max = students[i].age
    }
}
console.log(max)
let avg = sum/students.length
for(let item of students){
    if(item.age>avg){
    document.write(`<h1>${item.id}</h1>`)
    document.write(`<h1>${item.name}</h1>`)
    document.write(`<h1>${item.age}</h1>`)
    document.write(`<img src="${item.img}">`)
    }
}
document.write('<hr>')
students[0].name = 'Bakytzhan'
for(let item of students){
    document.write(`<h1>${item.id}</h1>`)
    document.write(`<h1>${item.name}</h1>`)
    document.write(`<h1>${item.age}</h1>`)
    document.write(`<img src="${item.img}">`)
}
document.write('<hr>')



let posts = [
    {
        id: 1,
        name: 'Kniga',
        price: 200,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, soluta?',
        img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
    },
    {
        id: 2,
        name: 'Kniga',
        price: 400,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, soluta?',
        img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
    },
    {
        id: 3,
        name: 'Kniga',
        price: 400,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, soluta?',
        img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
    },
    {
        id: 4,
        name: 'Kniga',
        price: 500,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, soluta?',
        img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
    },
    {
        id: 5,
        name: 'Kniga',
        price: 1000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, soluta?',
        img: 'https://novostiliteratury.ru/wp-content/uploads/2020/01/%D0%9A%D0%BD%D0%B8%D0%B3%D0%B8.png'
    },
    {
        id: 6,
        name: 'Kniga',
        price: 500,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, soluta?',
        img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
    }
    ,
    {
        id: 7,
        name: 'Kniga',
        price: 25,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, soluta?',
        img: 'https://novostiliteratury.ru/wp-content/uploads/2020/01/%D0%9A%D0%BD%D0%B8%D0%B3%D0%B8.png'
    },
    {
        id: 8,
        name: 'Kniga',
        price: 200,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, soluta?',
        img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
    },
    {
        id: 9,
        name: 'Kniga',
        price: 200,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, soluta?',
        img: 'https://novostiliteratury.ru/wp-content/uploads/2020/01/%D0%9A%D0%BD%D0%B8%D0%B3%D0%B8.png'
    }
]

document.write('<div class="post-inner">')

for(let item of posts){
    document.write('<div class="post">')
    document.write(`<img src="${item.img}">`)
    document.write(`
        <div class="info">
            <h1>${item.name}</h1>
            <p>${item.description}</p>
            <p>${item.price} tg</p>
        </div>
    `)
    document.write('</div>')
}
document.write('</div>')