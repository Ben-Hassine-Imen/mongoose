const express=require("express");
const app=express();
const mongoose = require("mongoose");
require('dotenv').config()
const person = require("./models/Person");

 mongoose.connect(process.env.DB_URI ,{ useNewUrlParser: true , useUnifiedTopology: true , useCreateIndex: true } ,(err)=>{
    if (err) throw err
    console.log('database connected')
  })
/*
//Create and Save  a Model

  const personModel = new person({
    name: "imen",
    age: 29,
    favoriteFoods: ["makloub", "tacos"],
  });
  
  
  personModel.save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.error(err);
  });

  //Create Many Records with model.create()

  var arrayOfPersons = [
    {
      name: "Med Aziz ",
      age: 4, 
      favoriteFoods: ["couscous", "frites"],
    },
    {
      name: "fadi ",
      age: 2,
      favoriteFoods: ["lait", "oeuf"],
    },
    {
      name: "amin",
      age: 31,
      favoriteFoods: ["cordonbleu", "kafteji"],
    },
    {
      name: "aymen",
      age: 32,
      favoriteFoods: ["couscous", "pizza"],
    }]

    person.create(arrayOfPersons)
          .then((doc) => {
            console.log(doc);
          })
          .catch((err) => {
            console.log(err);
          }); */
         
// Find all the people having a given name
         person.find({name:"aymen"})
          .then ((doc)=>{console.log(doc)})
          .catch((err) => {
            console.log(err);
          }); 
       
/*
          // Return a Single Matching Document from Your Database
    
           person.findOne({favoriteFoods:"pizza"})
          .then ((doc)=>{console.log(doc)})
          .catch((err) => {
            console.log(err);
          });  

          */
          
/*
     //Search  By _id

          person.findById({_id: "60a1a7bc138ba13be4da1a12"})
          .then ((doc)=>{console.log(doc)})
          .catch((err) => {
            console.log(err);
          });  */
/*
  // Perform Classic Updates by Running Find, Edit, then Save
      
           person.findByIdAndUpdate({ _id: "609f23fe1339b02fa42157dc"}, {$addToSet:{favoriteFoods:  "hamburger"}}, {new:true},  (err, person)=>{
                 person.save()
            .then((person)=>{console.log(person)})
          .catch((err) => {
            console.log(err);
          });
        })  


//Updates  Using model.findOneAndUpdate()
      
        person.findOneAndUpdate({ name: "adem"}, {$set:{age:4}}, {new:true}, (err, doc) => {
          if (err) {console.log("error")}
          console.log(doc);
      });  
         
      
     //Delete One Document Using model.findByIdAndRemove
 
         person.findByIdAndRemove({ _id: "60a18dc317f2e52ee4a95724"}, function (err, docs) {
          if (err){
              console.log(err)
          }
          else{
              console.log("User is being removed : ", docs);
          }
      }); 
  
//Delete Many Documents with model.remove()

 person.remove({age:{$lt:28}}, function (err, docs) {
          if (err){
              console.log(err)
          }
          else{
              console.log(docs);
          }
      }); 

  //Chain Search Query Helpers to Narrow Search Results    
 
   person.find({favoriteFoods: {$all:["pizza"]}})
  .limit(2)
  .sort({name:'asc'})
  .select('name')
  .exec()
  .then(docs => {
          console.log(docs)
        })
       .catch(err => {
          console.error(err)
        }) 

        */
app.listen(5000,()=>{
    console.log("conected...")
})