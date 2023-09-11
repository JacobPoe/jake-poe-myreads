import { PropTypes } from "prop-types";
import Book from "./Book";

import { v4 as uuid } from "uuid";

const Bookshelf = ({ shelfName, books, changeShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => {
            return (
              <Book
                key={uuid()}
                book={book}
                changeShelf={() => changeShelf()}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;

Bookshelf.propTypes = {
  shelfName: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired
};
