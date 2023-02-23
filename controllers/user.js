const User = require('../models/User')

const addUser = async(req,res,next) => {
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
}

const getUser = async(req,res,next) => {
    try{
    const users = await User.findAll()
    res.status(200).json({allUsers:users})
    }catch(error){
        console.log('Get user is failing', JSON.stringify(error))
         res.status(500).json({error:err})
    }
}

const deleteUser = async(req,res,next) => {
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

}

module.exports = {
    addUser,
    getUser,
    deleteUser
}