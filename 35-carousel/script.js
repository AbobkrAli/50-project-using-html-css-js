const images = document.querySelectorAll('img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const imagesContainer = document.querySelector('.images-container')
 carosulImageNum =0;
function toNext(){
    
        if(carosulImageNum == -images.length){
            carosulImageNum = -1;
        }
        else if(carosulImageNum == 0){
            carosulImageNum =-images.length+1;
        }
        imagesContainer.style.transform = `translate(${carosulImageNum * 350}px)`
        carosulImageNum--;
    
}
setInterval(toNext ,5000);
prev.addEventListener('click', ()=>{
    if(carosulImageNum == 0){
        carosulImageNum =-images.length+1;
    }
    carosulImageNum++;
    imagesContainer.style.transform = `translate(${carosulImageNum * 350}px)`
    
    console.log(carosulImageNum)

})

next.addEventListener('click', ()=>{
    if(carosulImageNum == -3){
        carosulImageNum =0;
    }
    console.log(carosulImageNum)
    carosulImageNum--;
    imagesContainer.style.transform = `translate(${carosulImageNum * 350}px)`
    

})