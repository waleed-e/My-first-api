

const express = require('express');
const app = express()


const port = 4000;

// parse every thing to JSON
app.use(express.json());

const coursesRouter = require('./routes/courses.routes')

app.use('/api/courses',coursesRouter)
// CRUD (Create/Read/Update/Delete)



  app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
  })