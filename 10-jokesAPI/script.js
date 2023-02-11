const jokeEl =document.getElementById('joke');
const jokeBtn =document.getElementById('jokeBtn');

generateJoke();

jokeBtn.addEventListener('click',()=>{
    generateJoke();
 })

 async function generateJoke(){
    const config = {
        headers: {
          Accept: 'application/json',
        },
      }
      const res = await fetch('https://icanhazdadjoke.com', config)
      const data = await res.json();
    jokeEl.textContent =data.joke;

}

// function generateJoke(){

//     fetch('https://icanhazdadjoke.com',{
//         headers:{
//             Accept: 'application/json',
//         }})
//         .then((respond)=> respond.json() )
//         .then((data)=>{
//             jokeEl.textContent =data.joke;
//         })
//}

