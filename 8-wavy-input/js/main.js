const labels =document.querySelectorAll('.labeel');

labels.forEach(label=>{
    label.innerHTML =label.textContent
    .split('').map((value,idx)=>`<span style="transition-delay:${idx * 200}ms">${value}</span>`)
    .join('');

})