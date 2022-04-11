const { Router } = require("express");
const auth = require("../middlewares/books.auth");
const {
  getBooks,
  deleteBook,
  deleteBookByFind,
} = require("../controllers/booksController");

const router = Router();

router.route("/books").get(auth, getBooks);
router.delete("/books/:title", deleteBook);

router.delete("/books/find/:title", deleteBookByFind);
module.exports = router;
