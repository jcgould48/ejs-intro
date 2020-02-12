const express = require('express');
const app = express()
const logger = require('morgan')
const path = require('path')
const users = require ('./models/Users.json')

require('dotenv').config();
const port = process.env.PORT || 3000;
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// app.get('/first', (req, res)=>{

//     res.render('main/home', {name: 'Bill'})
// });

app.get('/users/', (req, res)=>{
      res.render('main/users', {users});
});


// app.get('/location/:color/:car', (req, res)=>{
//     const firstName = "john"
//     const lastName = "bill"
//     let places = [
//         {city: "ss", state:'Ct'},
//         {city: "ab", state:'Ct'},
//         {city: "bb", state:'fl'},

//     ]
//     const {color, car} = req.params;
//     res.render('main/location', {color, car, places, firstName, lastName});
// });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    });