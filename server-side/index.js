const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000 ;

app.use(cors())

 const courses = require('./data/courses.json')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

  app.get('/courses',(req,res)=>{

       res.send(courses)
  })

  app.get('/courses/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const selectedNews = courses.find(n => n.id === id);
    console.log('id',id,selectedNews)
    res.send(selectedNews);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})