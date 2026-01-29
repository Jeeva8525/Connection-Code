const express = require('express');
const libraryService = require('./libraryService');
const libraryEmitter = require('./libraryEvent');

const app = express();
app.use(express.json());


setInterval(() => {
    console.log("Library system active...");
}, 10000);


app.get('/books', (req, res) => {
    libraryService.getAllBooks(res);
});


app.post('/addBook', (req, res) => {
    const newBook = req.body; 
    libraryService.addBook(newBook, (err) => {
        if (err) return res.status(500).send("Error saving book.");
        libraryEmitter.emit('bookAdded', newBook.title);
        res.status(201).send("Book Added Successfully");
    });
});


app.post('/issueBook/:bookId', (req, res) => {
    libraryService.updateBookStatus(req.params.bookId, "Issued", (err) => {
        if (err) return res.status(404).send(err.message);
        libraryEmitter.emit('bookIssued', req.params.bookId);
        res.send(`Book ${req.params.bookId} issued.`);
    });
});


app.post('/returnBook/:bookId', (req, res) => {
    libraryService.updateBookStatus(req.params.bookId, "Available", (err) => {
        if (err) return res.status(404).send(err.message);
        libraryEmitter.emit('bookReturned', req.params.bookId);
        res.send(`Book ${req.params.bookId} returned.`);
    });
});

app.listen(7000, () => console.log('running on http://localhost:7000'));