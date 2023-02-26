const card = document.querySelector('.card');
const heart = document.querySelector('.card i');
const count =document.querySelector('main p span')
 



card.addEventListener('dblclick',(e)=>{

    let left = e.clientX - card.getBoundingClientRect().left;
    let top  = e.clientY - card.getBoundingClientRect().top;
    addingHeartStyle(heart ,top ,left)
    setTimeout(()=>{
        heart.classList.add('style');    
    },100)
    setTimeout(()=>{
        heart.classList.remove('style')
        
        
    },300)
    
})




function addingTopLeft(top,left){
    heart.style.top = `${top}px`;
    heart.style.left = `${left}px`;
    
}



function addingHeartStyle(el, top ,left){
    addingTopLeft(top,left);
    
}