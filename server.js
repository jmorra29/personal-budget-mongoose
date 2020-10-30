const express = require('express');
const app = express();
const port = 3000;
const json = require('C:\\dev\\personal-budget\\budget.json');
const mongoose = require("mongoose")
const namesModel = require('C:\\dev\\personal-budget\\budget_schema')

let url = 'mongodb://localhost:27017/budget_values';

app.use('/', express.static('public'));

/*
let newData = new namesModel({title:"Take Out", budget:"35", color: "#ff6384"});
let newData2 = new namesModel({title:"Rent", budget:"600", color: "#ffcd56"});
let newData3 = new namesModel({title:"Grocery", budget:"100", color: "#36a2eb"});
let newData4 = new namesModel({title:"Laundry", budget:"10", color: "#fd6b19"});
let newData5 = new namesModel({title:"Recreation", budget:"75", color: "#d83ba7"});
let newData6 = new namesModel({title:"Utilities", budget:"120", color: "#836037"});
let newData7 = new namesModel({title:"Fuel", budget:"60", color: "#e69ee5"});
let newData8 = new namesModel({title:"Insurance", budget:"100", color: "#57821c"});
let newData9 = new namesModel({title:"Prescriptions", budget:"30", color: "#7b396e"});
let newData0 = new namesModel({title:"Hobbies", budget:"60", color: "#373e60"});
let newData11 = new namesModel({title:"Misc", budget:"50", color: "#977105"});
*/



app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true }, { useUnifiedTopology: true })
        .then(()=>{
            namesModel.find({})
                     .then((data) => {
                         res.send(data);
                         mongoose.connection.close()
                     })
                     .catch((connectionError)=>{
                         console.log(connectionError)
                     })
        })

        
});



app.listen(port, () => {
    console.log('Example app');
});