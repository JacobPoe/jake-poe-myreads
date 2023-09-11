import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Bookshelf from "./Bookshelf";

const ListBooks = ({ books, changeShelf }) => {
  /**
   * Creating an array of shelfType objects to iterate through,
   * rather than hard-coding a bunch of <Bookshelf> components.
   *
   * In a professional setting I'd probably declare this
   * `shelfTypes` definition in some sort of config file.
   */
  const shelfTypes = [
    {
      key: "currentlyReading",
      value: "Currently Reading"
    },
    {
      key: "wantToRead",
      value: "Want to Read"
    },
    {
      key: "read",
      value: "Read"
    }
  ];

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {shelfTypes.map((shelfType) => {
          return (
            <Bookshelf
              key={shelfType + uuid()}
              shelfName={shelfType.value}
              changeShelf={() => changeShelf()}
              books={books.filter((book) => {
                return book.shelf === shelfType.key;
              })}
            />
          );
        })}
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
