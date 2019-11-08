const express = require('express')
const app = express()

app.set('view engine', 'pug')
app.get('/', (request, response) => {
    response.send('Hello from FSU so FsU')
})
app.get('/students', (request, response) => {
    let pageData = {
        students: ['Ujwala', 'Upasana', 'Tatiana', 'Patrick Ohhhh', 'Patrick M', 'Caleb'],

    }
    response.render('students', pageData)
})
app.listen(1337, () => {
    console.log('lets go')
})