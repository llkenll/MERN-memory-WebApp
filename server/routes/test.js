import express from 'express';

const test = express.Router();
//localhosT:5000/posts
test.get('/', (req, res)=>{
    res.send('THIS WORKS');
});


export default test