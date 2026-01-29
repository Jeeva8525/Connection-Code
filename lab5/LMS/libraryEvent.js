const EventEmitter = require('events');
const libraryEmitter = new EventEmitter();


libraryEmitter.on('bookAdded', (title) => console.log(`[EVENT] Book Added: ${title}`));
libraryEmitter.on('bookIssued', (id) => console.log(`[EVENT] Book ID ${id} has been Issued.`));
libraryEmitter.on('bookReturned', (id) => console.log(`[EVENT] Book ID ${id} has been Returned.`));

module.exports = libraryEmitter;