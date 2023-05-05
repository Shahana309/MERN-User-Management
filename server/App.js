const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/userModel')
const jwt = require('jsonwebtoken')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/mern-webApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB!');
}).catch((err) => {
  console.log('Failed to connect to MongoDB:', err);
});
mongoose.set('strictQuery', true);


app.post('/api/signup', async (req, res) => {
    try {
        const check = await User.find({email:req.nody.email})
        if(!check){
            const user = await User.create({
                name: req.body.username,
                email: req.body.email,
                password: req.body.password
            })
            res.json({ status: 'ok' })
        }else{
            res.json({ status: 'error', error: 'Duplicate email' })
        }
    } catch (error) {
        res.json({ status: 'error', error: 'Duplicate email' })
    }
})

app.post('/api/login', async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    try{
        const data = await User.find({email:email,password:password})
            if(data){
                const token = jwt.sign({email : data.email,id : data._id}, 'secret123')
                res.json({...data,token})
            }else{
                res.json({status:'noUser'})
            }
    } catch(error) {
        console.log(error);
        res.json({ status:'error' })
    }
})

app.listen(8080, () => {
    console.log('Server Started on 8080');
})