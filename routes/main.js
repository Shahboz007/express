const {Router} = require('express');

const router = Router();
const path = require('path')

const {users} = require("./users")

router.get('/', (req, res) => { 
  res.render('main',{
    title: 'Users list',
    users,
  })
  // res.sendFile('../views')
  // res.sendFile(path.join(__dirname, '..','views','main.html'));
})


module.exports = router