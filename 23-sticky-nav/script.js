const header = document.querySelector('header')
window.addEventListener('scroll', (e)=>{
    if(window.scrollY >=300)    {
        header.classList.add('padding');
        document.documentElement.style.setProperty('--primary-color','#333')
        document.documentElement.style.setProperty('--secondary-color','#ddd')
    }else{
        header.classList.remove('padding')
        document.documentElement.style.setProperty('--primary-color','#ddd');
        document.documentElement.style.setProperty('--secondary-color','#333');

    }
    
})