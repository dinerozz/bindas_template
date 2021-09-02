const content = [
    {
        img: 'images/1.jpg',
        category: 'EXPERT'
    },
    {
        img: 'images/2.jpg',
        category: 'CONSULTING'
    },
    {
        img: 'images/3.jpg',
        category: 'EXPERT'
    },
    {
        img: 'images/4.jpg',
        category: 'RESEARCH'
    },
    {
        img: 'images/5.jpg',
        category: 'VIDEO'
    },
    {
        img: 'images/6.jpg',
        category: 'CONSULTING'
    }
]

const tabNav = document.querySelector('.tab-navs')
const tabContent = document.querySelector('.tab-content')


let outputTabNav = ''
let outputTabContent = ''
let categories = []

for(const value of content){
    categories.push(value.category)
    outputTabContent+= `
        <div class="tab-item">
            <img src="${value.img}">
        </div>
    `
}

categories = [...new Set(categories)]

outputTabNav += `<button class="tab-btn" onclick="changeContent('ALL')">ALL</button>`

for(const item of categories){
    outputTabNav+=`<button class="tab-btn" onclick="changeContent('${item}')">${item}</button>`
}

tabNav.innerHTML = outputTabNav
tabContent.innerHTML = outputTabContent


function changeContent(current){
    let output=''

    for(const product of content){
        if(product.category===current){
            output+=`
                <div class="tab-item">
                <img src="${product.img}">
                </div>
            `
        }
        if(current==='ALL'){
            output+=`
                <div class="tab-item">
                <img src="${product.img}">
                </div>
            `
        }
    }
    tabContent.innerHTML = output;
}