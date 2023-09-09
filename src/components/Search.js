import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";

const Search = () => {
  const [books, setBooks] = useState([]);
  const updateBooks = (res) => {
    query !== "" ? setBooks(res) : setBooks([]);
  };

  const [query, setQuery] = useState("");
  const updateQuery = (val) => {
    setQuery(val);
  };

  useEffect(() => {
    const searchBooks = async () => {
      if (query !== "") {
        const res = await BooksAPI.search(query, 20);
        updateBooks(res);
      } else {
        updateBooks([]);
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
        {books?.error === ("empty query" || undefined) ? (
          <p>No results found.</p>
        ) : (
          <ol className="books-grid">
            {books?.map((book) => {
              return <Book key={uuid()} book={book} />;
            })}
          </ol>
        )}
      </div>
    </div>
  );
};

export default Search;
