import express from 'express'
import bp from 'body-parser'
import morgan from 'morgan'

const app = express()
// Set up the middleware 
app.use(bp.urlencoded({extended:true}))
app.use(bp.json())  // alows us to parse the body of the POST request as Json and not as chunk of data 
app.use(morgan('dev'))  // log simplest amount of information


const db = {
  todos: [],
}

app.get('/todo', (req, res) => {
  res.json({ data: db.todos })
})

app.post('/todo', (req, res) => {
  const newTodo = { complete: false, id: Date.now(), text: req.body.text }
  db.todos.push(newTodo)

  res.json({ data: newTodo })
})
// dynamic routes
app.get('/todo/:id', (req, res) => {
    const todo = db.find(t => t.id === req.params.id);
    
    res.json({ data: todo })
  })

app.listen(8000, () => {
  console.log('Server on http://localhost:8000')
})
