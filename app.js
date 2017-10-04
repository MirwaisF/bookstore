var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Genre = require('./models/genre');
Book = require('./models/book');

// Connect to mongoose
mongoose.connect('mongodb://localhost/bookstore', {useMongoClient: true});
var db = mongoose.connection;

// Route for landing page
app.get('/', function(req, res){
    res.send('Please use /api/books or /api/genres to navigate through the API. Good luck!');
});

app.get('/api/genres', function(req, res) {
    Genre.getGenres(function(err, genres) {
        if(err) {
            throw err;
        }
        res.json(genres);
    });
})

app.get('/api/books', function(req, res) {
    Book.getBooks(function(err, books) {
        if(err) {
            throw err;
        }
        res.json(books);
    });
})

app.listen(3000);
console.log('Running on port 3000...');