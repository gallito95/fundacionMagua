const express = require('express');
const cors =require('cors')
const mongoose = require('mongoose')
const User = require('./models/User')
const Post = require('./models/Post')
const bcrypt = require('bcrypt')
const app= express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' })
const fs = require('fs')

const salt= bcrypt.genSaltSync(10);
const secret = 'asdfsddf434fddfsd';

app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

mongoose.connect('mongodb+srv://stefan:Baphomet88@cluster0.ge94vjg.mongodb.net/?retryWrites=true&w=majority');

app.post('/projects/register', async (req, res) => {
    const { Username, Password } = req.body;
try{   
    const userDoc = await User.create({ 
        Username,
        Password: bcrypt.hashSync(Password,salt),
    });
    res.json(userDoc);

}catch(e){
    res.status(400).json(e);
}
})

app.post('/projects/login', async (req, res) => {
  const { Username, Password } = req.body;
  const userDoc = await User.findOne({ Username });
  if (!userDoc) {
      // No user found with the provided username
      res.status(400).json('wrong credentials');
      return;
  }
  const passOk = bcrypt.compareSync(Password, userDoc.Password);
  if (passOk) {
      // logged in
      jwt.sign({ Username, id: userDoc._id }, secret, {}, (err, token) => {
          if (err) throw err;
          res.cookie('token', token).json({
            id:userDoc._id,
            Username
        });
      });
  } else {
      res.status(400).json('wrong credentials');
  }
});

app.get('/projects/profile', (req, res) => {
    const { token } = req.cookies;

    if(!token) {
        res.status(401).json('Not authenticated');
    }
    else{
        jwt.verify(token, secret, {}, (err,info)=> {
            if (err) {
                res.status(401).json('Token is not valid')
            }
            else {
                res.json(info)
            }
        })
    }}
);
  

app.post('/projects/logout', (req, res) => {
    // Clear the token cookie to log the user out
    res.clearCookie('token');
    res.status(200).json('Logged out successfully');
  });


app.post('/projects/post', uploadMiddleware.single('file'),  async (req,res) => {

   
    const {originalname, path} = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length -1];
    const newPath = path+'.'+ext
    fs.renameSync(path, newPath);

    
    const { token } = req.cookies;
    jwt.verify(token, secret, {}, async (err,info)=> {
        if (err) {
            res.status(401).json('Token is not valid')
        }       
        else {
            const {title, summary, content} = req.body;
    const postDoc = await Post.create({
        title,
        summary,
        content,
        cover:newPath,
        author: info.id,

    })
    res.json(postDoc);
        }
    })
    
    
});

app.put('/projects/post', uploadMiddleware.single('file'), async (req,res) =>{
    let newPath = null;
    if (req.file){
        const {originalname, path} = req.file;
        const parts = originalname.split('.');
        const ext = parts[parts.length -1];
        newPath = path+'.'+ext
        fs.renameSync(path, newPath);
    }
   const {token} = req.cookies;jwt.verify(token, secret, {}, async (err,info)=> {
    if (err) {
        res.status(401).json('Token is not valid')
    } 
    const {id, title, summary, content} = req.body;
    const postDoc = await Post.findById(id)
    const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
    if(!isAuthor) {
        return res.status(400).json('you are not the author')
    }
    await Post.findByIdAndUpdate(id, {
    title,
    summary,
    content,
    cover: newPath ? newPath : postDoc.cover,
});
    res.json(postDoc);
});

});


app.get('/projects/post', async (req,res)=>{
    res.json(await Post.find()
    .populate('author', ['Username'])
    .sort({createdAt: -1})
    .limit(20) //maximal 20 posts
    )
})

app.get('/projects/post/:id', async(req,res) => {
    const {id} = req.params;
    const postDoc = await Post.findById(id).populate('author', ['Username']);
    res.json(postDoc);
})


app.listen(4000);
// 
    
