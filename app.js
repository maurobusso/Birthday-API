document.querySelector('button').addEventListener('click', apiRequest)



async function apiRequest(){
     const friendName = document.getElementById('myInput').value 
     try{
         const response = await fetch(`https://birthday-api.onrender.com/${friendName}`) 
         console.log(friendName)
         const data = await response.json()

         console.log(data)
         document.querySelector('.container').innerText = data
     }catch(error){
         console.log(error)
     }
 }