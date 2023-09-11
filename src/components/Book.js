import { PropTypes } from "prop-types";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";
import * as BooksAPI from "../BooksAPI";

const Book = ({ book, changeShelf }) => {
  /**
   * Using a regular variable instead of a state variable.
   *
   * Since we are using the `changeShelf()` callback, there is
   * no point in re-rendering state based on the value of `shelf`.
   *
   * State will rerender regardless because the callback updates
   * the state of `books` in App.js
   */
  let shelf;
  const onChangeShelf = async (newShelf) => {
    await BooksAPI.update(book, newShelf);
    changeShelf();
  };

  useEffect(() => {
    // Don't bother calling changeShelf() if `shelf`'s
    // new value is empty or somehow undefined
    if (shelf) {
      changeShelf();
    }
  }, [shelf]);

  return (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          <div className="book-cover">
            <img
              src={book?.imageLinks?.thumbnail}
              alt={`${book?.title} cover art`}
            />
          </div>
          <div className="book-shelf-changer">
            <select
              name={`select_${book.id}`}
              value={shelf}
              onChange={(event) => onChangeShelf(event.target.value)}
            >
              <option>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book?.title}</div>
        <div className="book-authors">
          {book?.authors?.map((author) => {
            return <p key={uuid()}>{author}</p>;
          })}
        </div>
      </div>
    </li>
  );
};

export default Book;

Book.propTypes = {
  book: PropTypes.object.isRequired,
  changeShelf: PropTypes.func.isRequired
};
