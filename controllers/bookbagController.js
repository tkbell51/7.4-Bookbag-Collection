const Bookbags = require('../models/bookbags');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

module.exports = {
  list: (req, res)=> {
    let context = {}
    Bookbags.find().then(results =>{
      context.model = results
      res.render('index', context);
    });
  },
  bagForm: (req, res)=>{
    res.render('create',{});
  },
  addBag: (req, res)=>{
    let add = req.body;
    console.log(req.body.brand);

    const newBag = new Bookbags ({
      name: add.name,
      brand: add.brand,
      type: add.type,
      size: add.size,
      straps: Number(add.straps),
      color: add.color,
      pockets: Number(add.pockets),
      description: add.description
    })
    const use = {location: add.location}
    newBag.use.push(use);
    newBag.save();
    res.redirect('/bookbags')
  },
  bookbag: (req, res)=>{
    let context = {}
    Bookbags.find().then(results =>{
      context.model = results

      res.render('bookbags', context);
  });
},
profileBag: function(req, res){
    var context ={};
    var user = req.params.id;

    Bookbags.find({ "_id": user}).then(results=>{
      context.model = results
      res.render('profileBag', context);
    });
}
};
