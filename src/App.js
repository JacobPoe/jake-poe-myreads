import { React, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import * as BooksAPI from "./BooksAPI";
import ListBooks from "./components/ListBooks";
import Search from "./components/Search";

function App() {
  const [books, setBooks] = useState([]);
  const updateBooks = async () => {
    const allBooks = await BooksAPI.getAll();
    setBooks(allBooks);
  };

  useEffect(() => {
    updateBooks();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ListBooks books={books} changeShelf={() => updateBooks()} />
          }
        />
        {/**
         * Passing a list of book titles into the Search component so we
         * can filter out any results that are already on a shelf.
         *
         * This improves the UX because it declutters the results screen
         * and removes any ambiguity as to whether or not the book is already
         * in the user's collection (an issue I ran into occasionally while
         * working on this project :) ).
         *
         * Passing in an array of titles instead of the whole `books` object
         * because results from the "/search" endpoint don't include a value
         * for `shelf`, so comparing equivalency of the two objects would
         * always return false.
         */}
        <Route
          exact
          path="/search"
          element={
            <Search
              booksList={books.map((book) => {
                return book.title;
              })}
              addToShelf={() => updateBooks()}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
