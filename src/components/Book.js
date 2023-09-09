import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import * as BooksAPI from "../BooksAPI";

const Book = ({ book }) => {
  const [shelf, setshelf] = useState("");
  const updateShelf = (val) => {
    console.log(`Placing "${book.title}" on shelf ${val}`);
    setshelf(val);
  };

  useEffect(() => {
    const changeShelf = async () => {
      if (shelf !== "") await BooksAPI.update(book, shelf);
    };

    changeShelf();
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
              onChange={(event) => updateShelf(event.target.value)}
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
  book: PropTypes.object.isRequired
};
