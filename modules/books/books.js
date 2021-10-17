import { deleteArrayValueIfExist, updateArrayValueWithoutChangeIndex } from "../../modules/books/service.js";

let books = [];


export const getBooks = (req, res) => {
    res.send(books);
}


export const addBook = (req, res) => {
    const bookName = req.body.book;
    let message;
    if (!books.includes(bookName)) {
        books.push(bookName);
        message = `Book ${bookName} added`;
    } else {
        message = `Book ${bookName} already added`;
    }
    res.send({
        'message': message,
    });
};


export const deleteBook = (req, res) => {
    let message = deleteArrayValueIfExist(books, req.body.book);
    res.send({
        'message': message,
    });
};


export const updateBook = (req, res) => {
    let message = updateArrayValueWithoutChangeIndex(books, req.body.original_book, req.body.new_book);
    res.send({
        'message': message
    });
};



