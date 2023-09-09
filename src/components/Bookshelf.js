import { PropTypes } from "prop-types";
import Book from "./Book";

import { v4 as uuid } from "uuid";

const Bookshelf = ({ shelf, books, handleUpdateBooks }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => {
            return (
              <Book
                key={uuid()}
                book={book}
                changeBookshelf={handleUpdateBooks}
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
  shelf: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  handleUpdateBooks: PropTypes.func.isRequired
};
