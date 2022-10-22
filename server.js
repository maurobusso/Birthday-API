const express = require('express')
const app = express()
const cors = require('cors')  
const PORT = 8000

app.use(cors())

const people = {
    'luca':{
        'birthday': '12/october',
        'age': 30
    },  
    'marco':{
        'birthday': '12/february',
        'age': 32
    },  
    'stefano':{
        'birthday': '12/october',
        'age': 56  
    },
    'simone':{
        'birthday': '12/october' ,
        'age': 32
    },
    'not found':{
        'birthday': 'not found',
    }  
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')  
})

// app.get('/api', (request, response) => {
//     response.json(people)  
// })

//the bug is here probs

app.get('/:name', (request, response) => {
    const friendName = request.params.name.toLowerCase()  //this line grabs the query parameter after /api:
    
    if(people[friendName]){
        response.json(people[friendName])

    }else{
        response.json(people['not found'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on ${PORT}!`)
})


