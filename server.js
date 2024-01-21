const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(express.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://dvizcarr:0uwHfVhhfFgmRHzd@cruzhacks.dpkyaf6.mongodb.net/CruzConnect", {useNewUrlParser: true}, {useUnifiedTopology: true})

const notesSchema = {
    title: String,
    description: String,
    date: Date,
    people: Number,
    price: Number
}
const Note = mongoose.model('Note', notesSchema); 



app.get("/", function(req, res) {
    res.sendFile(__dirname + '/new_post.html');
})

app.post("/", function(req, res){
    let newNote = new Note({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        people: req.body.people,
        price: req.body.price
    });
    newNote.save();
    res.redirect('/');
})

app.listen(3000, function () {
    console.log('listening on port new');
})