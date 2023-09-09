import { React, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import * as BooksAPI from "./BooksAPI";
import ListBooks from "./components/ListBooks";
import Search from "./components/Search";

function App() {
  const [books, setBooks] = useState([]);
  const updateBooks = (val) => {
    setBooks(val);
    console.log("updating books", books);
  };

  const getAllBooks = async () => {
    const res = await BooksAPI.getAll();
    if (res !== books) {
      return updateBooks(res);
    }
  };

  useEffect(() => {
    // let isUpdating = false;
    // if (isUpdating === true) updateBooks();
    getAllBooks();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ListBooks books={books} handleUpdateBooks={() => getAllBooks()} />
          }
        />
        <Route
          exact
          path="/search"
          element={<Search addBook={() => getAllBooks()} />}
        />
      </Routes>
    </div>
  );
}

export default App;
