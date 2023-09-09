import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";

const ListBooks = ({ books, handleUpdateBooks }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Bookshelf
          shelf={"Currently Reading"}
          handleUpdateBooks={handleUpdateBooks}
          books={books.filter((book) => {
            return book.shelf === "currentlyReading";
          })}
        />
        <Bookshelf
          shelf={"Want to Read"}
          handleUpdateBooks={handleUpdateBooks}
          books={books.filter((book) => {
            return book.shelf === "wantToRead";
          })}
        />
        <Bookshelf
          shelf={"Read"}
          handleUpdateBooks={handleUpdateBooks}
          books={books.filter((book) => {
            return book.shelf === "read";
          })}
        />
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
