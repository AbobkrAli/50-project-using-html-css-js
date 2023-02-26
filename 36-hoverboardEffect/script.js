const boxes = document.querySelector('.box')
const container = document.querySelector('.boxes-container')
let colors = ['green' ,'red' ,'blue', 'purple'];
let boxesNum = 507;

for(let i =0; i<=boxesNum ;i++){
    let box =document.createElement('div');
    box.classList.add('box');
    container.appendChild(box)
    box.addEventListener('mouseover', (e)=>{
        box.style.backgroundColor = `${colors[Math.floor(Math.random() * colors.length - 1)]}`
    })
    box.addEventListener('mouseout', (e)=>{
        box.style.backgroundColor = `#333`
    })
}

