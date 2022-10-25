document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
     const friendName = document.querySelector('input').value 
     try{
         const apiData = await fetch(`https://birthday-api.onrender.com/${friendName}`) 
         console.log(apiData)
         const data = await response.json(apiData)

         console.log(data)
         document.querySelector('h2').innerText = data.birthName
     }catch(error){
         console.log(error)
     }
 }