const bg =document.querySelector('.bg');
const loading= document.querySelector('.loading-text');
const loadingNum=document.querySelector('.percentage')

let load= loadingNum.textContent;
let gray=10;

let int =setInterval(blurring, 20);
function blurring(){
    load--
    if(load <= 0){
        clearInterval(int);
        loading.textContent =""
    }
    
    loadingNum.textContent =load;
    bg.style.filter= `blur(${load/10}px) grayscale(${load}%)`;
}