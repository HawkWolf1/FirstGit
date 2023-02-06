const path = require('path')

const express = require('express')
const bodyParser = require('body-parser') 

const errorController = require('./controllers/error')

const Sequelize = require('sequelize')

const sequelize = new Sequelize('vsc', 'root', 'Avinash123@', {
    dialect: 'mysql',
    host: 'localhost'
})


const User = require('./models/User')
var cors = require('cors')

const app = express()

app.use(cors())

app.set('view engine', 'ejs')
app.set('views', 'views')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')


app.use(bodyParser.json({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.post('/user/add-user', async(req,res,next) => {
    try{
        if(!req.body.description){
            throw new Error ('Descriptipon is required!')
        }
    const amount = req.body.amount
    const description = req.body.description
    const category = req.body.category

    const data = await User.create({amount:amount, description:description, category:category})
    res.status(201).json({newUserDetail:data})
    } catch(err){
        res.status(500).json({
            error:err
        })
    }
})

app.get('user/get-users', async(req,res,next) => {
    try{
    const users = await User.findAll()
    res.status(200).json({allUsers:users})
    }catch(error){
        console.log('Get user is failing', JSON.stringify(error))
         res.status(500).json({error:err})
    }
})

app.delete('/user/delete-user/:id', async(req,res,next) => {
    try{
        if(req.params.id){
            console.log('ID is missing')
            return res.params(400).json({err: 'ID is missing'})
        }
    const uId = req.params.id
    await User.destroy({where: {id:uId}})
    res.sendStatus(200)
    } catch(err){
        console.log(err)
        res.status(500).json({error:err})
    }

})