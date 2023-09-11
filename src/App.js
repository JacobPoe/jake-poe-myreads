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
        <Route
          exact
          path="/search"
          element={
            <Search booksList={books} addToShelf={() => updateBooks()} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
