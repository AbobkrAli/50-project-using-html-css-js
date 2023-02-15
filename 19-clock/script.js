
// adding mode functionality to the button
const btn = document.querySelector('.btn')
const mode = document.querySelector('.mode')

console.log(btn)
let button_status =0;
btn.addEventListener('click',()=>{
    if(button_status==0){
        document.documentElement.style.setProperty('--primary-color', '#fff');
        document.documentElement.style.setProperty('--secondary-color','#000');
        document.documentElement.style.setProperty('--body-color','#ddd');
        mode.textContent ="light";
        button_status=1;
    }else{

        document.documentElement.style.setProperty('--primary-color', '#000');
        document.documentElement.style.setProperty('--secondary-color','#fff');
        document.documentElement.style.setProperty('--body-color','#333');
        button_status=0;
        mode.textContent ="dark";
    }
})

//clock moves

const hourNeedle =document.querySelector('.hour-needle');
const minuateNeedle =document.querySelector('.minuate-needle');
const secondNeedle =document.querySelector('.second-needle')
const hourNeedled =document.querySelector('.hour-needle');
let hourN=document.querySelector('body > h1');
let minuateN=document.querySelector('body > p');
let ampm=document.querySelector('.ampm');
const datee= document.querySelector('.datee');
const days=['satur', 'sun', 'mon', 'tues', 'wednes', 'thurs', 'fri']
let months=['jan','feb','mars', 'april','maye', 'june','julie','august','september', 'oct', 'nov', 'dec']
let clockMoving=setInterval(()=>{
    setDate();
},1000)

function setDate(){
    let date =new Date();
    let hour =date.getHours();
    let minuates =date.getMinutes();
    let seconds =date.getSeconds();
    let dayss =date.getDate();
    let month= date.getMonth();
    let zone ='pm';
    //changing text
    if(hour > 12){
        zone="PM";
    }else{
        zone="AM"
    }
    hourN.textContent=`${hour % 12}:${minuates}:${seconds} ${zone}`
    let dayC=dayss % 7;
    datee.innerHTML =`${days[dayC]}, ${months[month]}, <span class="day">${month+1}</span>`

    //changing the clock
    let secondsDeg= (seconds*6);
    console.log(secondsDeg)
    // let minuateDeg =minuates*6;
    let minuateDeg = (minuates*6);
    // let hoursDeg =hour;
    let hoursDeg =hour_angle = 0.5 * (hour * 60 + minuates);
    secondNeedle.style.transform = ` rotate(${scale(seconds, 0, 60, 0, 360) +180}deg)`
    minuateNeedle.style.transform=`rotate(${minuateDeg +180}deg)`;
    hourNeedle.style.transform=`rotate(${hoursDeg * 15 +180}deg)`;



}
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}