const button = document.querySelector('button');

button.addEventListener('click', function(e){
    let x= e.clientX;
    let y=e.clientY;

    let btnLeft= e.target.offsetLeft;
    let btnTop =e.target.offsetTop;
    let realTop = y - btnTop;
    let realLeft = x - btnLeft;
    let span= document.createElement('span');
    span.classList.add('circle');
    span.style.top =`${realTop}px`
    span.style.left= `${realLeft}px`
    this.appendChild(span)

    setTimeout(()=>{
        span.remove();
    },500)
})
