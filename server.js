const { response } = require('express')
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
        'birthday': 'not found'
    }  
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')   
})

app.get('/api/:name', (req, res) => {
    const peopleName = req.params.name.toLowerCase()
    
    if(people[peopleName]){
        res.json(people[peopleName])

    }else{
        res.json(people['not found'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on ${PORT}!`)
})


