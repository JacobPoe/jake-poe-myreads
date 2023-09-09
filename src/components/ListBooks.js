import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Book from "./Book";

const ListBooks = ({ books, handleUpdateBooks }) => {
  console.log(books);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books
                .filter((book) => {
                  return book.shelf === "currentlyReading";
                })
                .map((book) => {
                  return (
                    <Book
                      key={uuid()}
                      book={book}
                      changeShelf={handleUpdateBooks}
                    />
                  );
                })}
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books
                .filter((book) => {
                  return book.shelf === "wantToRead";
                })
                .map((book) => {
                  return (
                    <Book
                      key={uuid()}
                      book={book}
                      changeShelf={handleUpdateBooks}
                    />
                  );
                })}
            </ol>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books
                .filter((book) => {
                  return book.shelf === "read";
                })
                .map((book) => {
                  return (
                    <Book
                      key={uuid()}
                      book={book}
                      changeShelf={handleUpdateBooks}
                    />
                  );
                })}
            </ol>
          </div>
        </div>
      </div>
      <div className="open-search">
        <Link to={{ pathname: "/search" }}>Add a book</Link>
      </div>
    </div>
  );
};

export default ListBooks;

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  handleUpdateBooks: PropTypes.func.isRequired
};
