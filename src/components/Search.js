import { PropTypes } from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Book from "./Book";

const Search = ({ books }) => {
  const [query, setQuery] = useState("");
  const updateQuery = (val) => {
    val ? setQuery(val.trim()) : setQuery("");
    console.log(filteredBooks);
  };

  const filteredBooks =
    query === ""
      ? []
      : books.filter((book) => {
          return filterBooks(book);
        });
  const filterBooks = (book) => {
    return (
      book.title.includes(query.toLowerCase()) ||
      book.authors
        .filter((author) => {
          return author.includes(query.toLowerCase());
        })
        .includes(query.toLowerCase()) ||
      book.industryIdentifiers.includes(query.toLowerCase())
    );
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(event) => {
              updateQuery(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {filteredBooks.map((book) => {
            return <Book key={uuid()} book={book} />;
          })}
        </ol>
      </div>
      <Link to={{ pathname: "/" }} className="close-search">
        Return Home
      </Link>
    </div>
  );
};

export default Search;

Search.propTypes = {
  books: PropTypes.array.isRequired
};
