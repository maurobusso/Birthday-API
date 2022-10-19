
document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
     const birthday = document.querySelector('input').value //birthday name
     try{
         const response = await fetch(`https://birthday-api.herokuapp.com/api/${birthday}`) //birthday
         const data = await response.json()

         console.log(data)
         document.querySelector('h2').innerText = data.birthday //birthday name
     }catch(error){
         console.log(error)
     }
 }