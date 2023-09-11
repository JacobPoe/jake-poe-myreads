import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";

const ListBooks = ({ books, changeShelf }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Bookshelf
          shelfName={"Currently Reading"}
          changeShelf={() => changeShelf()}
          books={books.filter((book) => {
            return book.shelf === "currentlyReading";
          })}
        />
        <Bookshelf
          shelfName={"Want to Read"}
          changeShelf={() => changeShelf()}
          books={books.filter((book) => {
            return book.shelf === "wantToRead";
          })}
        />
        <Bookshelf
          shelfName={"Read"}
          changeShelf={() => changeShelf()}
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
  changeShelf: PropTypes.func.isRequired
};
