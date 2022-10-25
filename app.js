document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
     const friendName = document.querySelector('input').value 
     try{
         const response = await fetch(`https://birthday-api.onrender.com/api/${friendName}`) 
         const data = await response.json()

         console.log(data)
         document.querySelector('h2').innerText = data.birthday
     }catch(error){
         console.log(error)
     }
 }