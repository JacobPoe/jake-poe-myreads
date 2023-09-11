import { PropTypes } from "prop-types";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";
import * as BooksAPI from "../BooksAPI";

const Book = ({ book, onChangeShelf }) => {
  // const [shelf, setShelf] = useState("");
  // const updateShelf = (val) => {
  //   setShelf(val);
  // };

  let shelf = "";
  const changeShelf = async (newShelf) => {
    console.log(book.title, newShelf);
    await BooksAPI.update(book, newShelf);
    onChangeShelf();
    // updateShelf(newShelf);
  };

  useEffect(() => {
    if (shelf !== "") {
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
              onChange={(event) => changeShelf(event.target.value)}
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
  onChangeShelf: PropTypes.func.isRequired
};
