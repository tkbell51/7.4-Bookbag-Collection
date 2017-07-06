const mongoose = require('mongoose');
const Bookbag = require('./models/bookbags');
const express = require('express');
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const bookbagController = require('./controllers/bookbagController');
const app = express();

app.use(express.static('public'));
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost:27017/mongoosedb');
mongoose.Promise = require("bluebird");

app.get('/', bookbagController.list);
app.get('/addbag', bookbagController.bagForm)
app.post('/addbag', bookbagController.addBag);
app.get('/bookbags', bookbagController.bookbag);
app.get('/bookbags/:id', bookbagController.profileBag)

// const thule = new Bookbag ({
//   name: "School bag",
//   brand: "THULE",
//   type: "backpack",
//   size: "medium",
//   straps: 2,
//   color: "black",
//   pockets: 6,
//   description: "Black backpack with small spots tech bag teal heavy-duty zippers weird handle on bottom of bag side pockets"
// })
// var use = {location: "The Iron Yard"}
// thule.use.push(use);
// thule.save();
//
// const jordan = new Bookbag({name: "Travel bag", brand: "Jordan", type: "backpack", size: "medium", straps: 2, color: "black", pockets: 2, description: "black one buckle small zipper in front tech bag side pockets"})
// var use = {location: "overnight bag"}
// jordan.use.push(use);
// jordan.save();
// console.log(thule.toObject());
app.listen(3000);
