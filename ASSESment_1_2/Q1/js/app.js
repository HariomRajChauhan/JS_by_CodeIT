/*Write a JavaScript program to display the reading status (i.e. display book name,author name and reading status) of the following books. */

// Define an array of books
const books = [
    {
        title: "Phul ko Bot",
        author: "Parijat",
        readingStatus: true,
    },
    {
        title: "Ek Chihan",
        author: "Hridaya Chandra Singh Pradhan",
        readingStatus: false,
    },
];

// Iterate over the books array and display the reading status
books.forEach(book => {
    console.log(`Book: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Reading Status: ${book.readingStatus ? 'Read' : 'Not Read'}`);
    console.log('---');
});