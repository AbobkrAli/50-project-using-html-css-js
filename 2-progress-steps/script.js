const progress=document.querySelector('.progress');
const circles=document.querySelectorAll('.circle')
const next=document.querySelector('#next')
const prev=document.querySelector('#prev')
let currentActive =1;
next.addEventListener('click',()=>{
    currentActive++;
    if(currentActive > circles.length){
	currentActive = circles.length;
    }
    update();
    
})
prev.addEventListener('click',()=>{
    currentActive--;
    if(currentActive < 1){
	currentActive = 1;
    }
    
    update();
})

function update(){
    circles.forEach((circle,idx)=>{
	if(idx < currentActive) {
	    circle.classList.add('active');
	}else{
	    circle.classList.remove('active');
	}
    })
    const actives =document.querySelectorAll('.actives');
    console.log(((actives.length) / (circles.length )) *100)
    progress.style.width= (currentActive-1)*33 +'%';
	
    
}
