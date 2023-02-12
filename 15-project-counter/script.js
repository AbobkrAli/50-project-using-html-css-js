
let counters =document.querySelectorAll('.counter');


window.addEventListener('DOMContentLoaded',increasingF())


console.log(counters)

function increasingF(){
    
    counters.forEach((ele)=>{
        let counter = ele.getAttribute('data-counter');
        let counter0=0;
        let increasing =setInterval(()=>{
            counter0+=10;
            ele.textContent=counter0;
            if(counter0 ==counter){
                clearInterval(increasing);
                
            }

        },1)
    })       
    
}