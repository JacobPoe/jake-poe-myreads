import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";

const ListBooks = ({ books }) => {
  console.log(books);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Bookshelf
          shelf={"Currently Reading"}
          books={books.filter((book) => {
            return book.shelf === "currentlyReading";
          })}
        />
        <Bookshelf
          shelf={"Want to Read"}
          books={books.filter((book) => {
            return book.shelf === "wantToRead";
          })}
        />
        <Bookshelf
          shelf={"Read"}
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
  books: PropTypes.array.isRequired
};
