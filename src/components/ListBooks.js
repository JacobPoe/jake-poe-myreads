import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Bookshelf from "./Bookshelf";

const ListBooks = ({ books, changeShelf }) => {
  /**
   * Creating an array of shelfType objects to iterate through,
   * rather than hard-coding a bunch of <Bookshelf> components.
   *
   * In a professional setting I'd handle this list of types in
   * one of two ways:
   * 1) If we knew the list of shelf types was currently static but
   *    COULD change in the future, I would probably declare this
   *    `shelfTypes` definition in some sort of config file and
   *    import those values at the top of this file.
   *
   * 2) If we knew the API could return some dynamic amount of shelf types,
   *    at the top of the file I'd write some function to parse out the
   *    different `shelfTypes` declarations and create an array from those values.
   *
   *
   * If the structure of the `shelf` object didn't change to include a value for the
   * shelf title, I'd need some parser to create a shelf title from camelCase text,
   * so I went with a solution similar to option 1 for this assignment.
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
