














const fill = document.querySelectorAll('.fill');
const glasses =document.querySelectorAll('.glass');
const fullside= document.querySelector('.full-side');
const realPercentage =document.querySelector('.full-side h2');
const remaining =document.querySelector('.remaining');
glasses.forEach((glass)=>{
    glass.addEventListener('click', (e)=>{
        removeActiveFill();
        let count =glass.getAttribute('data-count');
        for(let i=0;i<=count-1;i++)
        glasses[i].classList.add('active')
        addingWater(count);
    })
})
function removeActiveFill(){
    glasses.forEach((glass)=>{
        glass.classList.remove('active')
    }) 
}

function addingWater(glasses){
    let percentage =(glasses)*12.5;
    fullside.style.height=`${percentage}%`;
    realPercentage.textContent =`${percentage}%`;
    let remained =`${((8-glasses)*250)}`
    remaining.textContent =`${remained}ml`;

}