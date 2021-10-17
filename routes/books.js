import express from 'express';
import { getBooks, addBook, updateBook, deleteBook } from '../modules/books/books.controller.js';

const router = express.Router();

router.post('/', addBook);
router.get('/', getBooks);
router.delete('/', deleteBook);
router.patch('/', updateBook);

export default router;