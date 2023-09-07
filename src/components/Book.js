import { PropTypes } from "prop-types";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const Book = ({ book, changeShelf }) => {
  const [shelf, setshelf] = useState(book?.shelf);
  const updateShelf = (val) => {
    setshelf(val);
    changeShelf();
  };

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
              value={shelf}
              onChange={(event) => updateShelf(event.target.value)}
            >
              <option value="none" disabled>
                Move to...
              </option>
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
  changeShelf: PropTypes.func.isRequired,

  updateShelf: PropTypes.func.isRequired
};
