const express = require('express')

const cookieParser = require('cookie-parser')

const postRoutes = require('./routes/post.routes')


const authRoutes = require('./routes/auth.routes')

const app = express();

app.use(express.json())

app.use(cookieParser());//agar middleware nhi use karenge to ham kuch bhi cookie me store nhi kara payenge

app.use('/api/auth', authRoutes)  //'/api/auth' ye ek prefix hai jo auth.routes.js file me jo api post call karne ke liye hame pahle /api/auth/register karna padega


app.use('/api/posts', postRoutes)

module.exports = app;