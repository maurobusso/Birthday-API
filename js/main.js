
document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
     const people = document.querySelector('input').value //birthday name
     try{
         const response = await fetch(`https://birthday-api.onrender.com/${people}`) //birthday
         const data = await response.json()

         console.log(data)
         document.querySelector('h2').innerText = data //birthday name
     }catch(error){
         console.log(error)
     }
 }