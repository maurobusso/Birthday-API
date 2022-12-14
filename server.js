const express = require('express')
const app = express()
const cors = require('cors')  
const PORT = 8000

app.use(cors())

const people = {
    'luca':{
        'birthday': 'something',
        'age': 10
    },  
    'marco':{
        'birthday': 'something',
        'age': 10
    },  
    'stefano':{
        'birthday': 'something',
        'age': 10  
    },
    'simone':{
        'birthday': 'something' ,
        'age': 10
    },
    'unkown':{
        'birthday': 'unkown',
    }  
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')  
})


app.get('/:name', (request, response) => {
    const friendName = request.params.name.toLowerCase()  
    if(people[friendName]){
        response.json(people[friendName])
    }else{
        response.json(people['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on ${PORT}! you better catch it`)
})


