import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";

const Search = ({ booksList, addToShelf }) => {
  const [bookResults, setBooks] = useState([]);
  const updateBookResults = (res) => {
    query !== "" ? setBooks(res) : setBooks([]);
  };

  const [query, setQuery] = useState("");
  const updateQuery = (val) => {
    setQuery(val);
  };

  useEffect(() => {
    const searchBooks = async () => {
      // Avoiding 403s by preventing the app from
      // sending an empty search query on initial load.
      if (query !== "") {
        // The API only returns 20 results at a time, so I
        // may as well maximize the number of results I can get
        const res = await BooksAPI.search(query, 20);
        updateBookResults(res);
      } else {
        updateBookResults([]);
      }
    };

    searchBooks();
  }, [query]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <div className="search-books-input-wrapper">
          <input
            id="searchbar"
            key="searchbar"
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(event) => {
              updateQuery(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="search-books-results">
        <Link to={{ pathname: "/" }} className="close-search">
          Return Home
        </Link>
        {/** Checking for errors/empty results from the search endpoint */}
        {query === "" || bookResults?.error ? (
          <p>No results found.</p>
        ) : (
          <ol className="books-grid">
            {bookResults?.map((book) => {
              const match = booksList.filter((matchingBook) => {
                return matchingBook.id === book.id;
              })[0]; // results are returned in an array with one element

              // Update the `book` object with the value of `shelf` from
              // its corresponding object in the list of books on shelves.
              book.shelf = match !== undefined ? match.shelf : "none";

              return <Book key={uuid()} book={book} changeShelf={addToShelf} />;
            })}
          </ol>
        )}
      </div>
    </div>
  );
};

export default Search;

Search.propTypes = {
  booksList: PropTypes.array.isRequired,
  addToShelf: PropTypes.func.isRequired
};
