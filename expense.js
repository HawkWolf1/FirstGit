const path = require('path')

const express = require('express')

const bodyParser = require('body-parser') 

// const errorController = require('./controllers/error')

const sequelize = require('./util/database')

const User = require('./models/User')

var cors = require('cors')

const app = express()


app.use(cors())

// app.set('view engine', 'ejs')
// app.set('views', 'views')

const adminRoutes = require('./expenseRoutes/admin')
const shopRoutes = require('./expenseRoutes/shop')
const userRoutes = require('./expenseRoutes/user')


app.use(bodyParser.json({extended:false}))
// app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)
app.use('/user', userRoutes)



app.use(errorController.get404)

sequelize.sync().then(result => {
    app.listen(4000)
})
.catch((err) => console.log(404))