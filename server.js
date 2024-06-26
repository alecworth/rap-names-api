const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England',
        'image': '/Untitled.jpg'
    },
    'chance the rapper':{
        'age': 29,
        'birthName': 'Chancelor Bennett' ,
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    },
}

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req,res)=>{
    const rapperName = req.params.name.toLowerCase()
    if ( rappers[rapperName] ) {
        res.json(rappers[rapperName])
    } else {
        res.json(rappers['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Better go catch it!`)
})