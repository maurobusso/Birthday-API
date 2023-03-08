const button = document.querySelector('button')  
const container = document.getElementById('container')
const friend = document.getElementById('myInput')

button.addEventListener('click', apiRequest)

async function apiRequest(){
    console.log('click')
    const friendName = friend.value 
    try{
        const response = await fetch(`https://funny-muffin-ce082f.netlify.app/${friendName}`) 
        const data = await response.json()
        
        container.innerText = data.birthday
    }catch(error){
        console.log(error)
    }
}

// `https://funny-muffin-ce082f.netlify.app/${friendName}`
//`https://birthday-api.onrender.com/api/${friendName}`