const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'library.json');

if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, JSON.stringify([]));

const libraryService = {
    
    getAllBooks: (res) => {
        const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });
        readStream.pipe(res);
    },

    addBook: (newBook, callback) => {
        fs.readFile(filePath, (err, data) => {
            if (err) return callback(err);
            
            const books = JSON.parse(data.toString());
            books.push(newBook);
 
            const buffer = Buffer.from(JSON.stringify(books, null, 2));
            const writeStream = fs.createWriteStream(filePath);
            writeStream.write(buffer);
            writeStream.end();
            writeStream.on('finish', () => callback(null));
            writeStream.on('error', (err) => callback(err));
        });
    },

    updateBookStatus: (bookId, status, callback) => {
        fs.readFile(filePath, (err, data) => {
            if (err) return callback(err);
            let books = JSON.parse(data.toString());
            const index = books.findIndex(b => b.bookId == bookId);

            if (index === -1) return callback(new Error("Book not found"));

            books[index].status = status;
            fs.writeFile(filePath, JSON.stringify(books, null, 2), (err) => {
                callback(err, books[index]);
            });
        });
    }
};

module.exports = libraryService;