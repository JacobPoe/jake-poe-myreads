import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import * as BooksAPI from "./../BooksAPI";
import Book from "./Book";
const Search = () => {
  const [books, setBooks] = useState([]);
  const updateBooks = (res) => {
    setBooks(res);
  };

  const [query, setQuery] = useState("");
  const updateQuery = (val) => {
    setQuery(val);
  };

  useEffect(() => {
    let isSearching = true;
    const searchBooks = async () => {
      if (query && isSearching) {
        const res = await BooksAPI.search(query, 20);
        updateBooks(res);
        console.log(books);
        console.log(books.error);
      }
    };

    searchBooks();

    return () => {
      isSearching = false;
    };
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
      <Link to={{ pathname: "/" }} className="close-search">
        Return Home
      </Link>
    </div>
  );
};

export default Search;
