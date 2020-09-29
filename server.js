const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors')
const knex = require('knex');

const register = require('./controller/register');
const signin = require('./controller/signin');
const profileget = require('./controller/profileget');
const image = require('./controller/image')

const pgdb = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'a',
    database : 'faceRecognition'
  }
});

const app = express();
app.use(bodyParser.json());
app.use(cors()); 

app.get('/', (req,res)=> {res.send(database.users);})
app.post('/signin',(req,res) => {signin.handleSignin(req,res,pgdb,bcrypt)})
app.post('/register',(req,res) => {register.handleRegister(req,res,pgdb,bcrypt)})
app.get('/profile/:id',(req,res) => {profileget.handleProfileget(req,res,pgdb)})
app.put('/image', (req,res) => {image.handleImage(req,res,pgdb)}),
app.post('/imageurl', (req,res) => {image.handleApiCall(req,res)})

app.listen(3000, () => {
	console.log('app is running');
})


