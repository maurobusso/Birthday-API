const button = document.querySelector('button')  
const container = document.getElementById('container')
const friend = document.getElementById('myInput')

button.addEventListener('click', apiRequest)

async function apiRequest(){
    console.log('works')
    const friendName = friend.value 
    try{
        const response = await fetch(`https://birthday-api.onrender.com/api/${friendName}`) 
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.birthday
    }catch(error){
        console.log(error)
    }
    console.log(friendName)
}