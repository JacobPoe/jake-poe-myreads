import { React, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import * as BooksAPI from "./BooksAPI";
import ListBooks from "./components/ListBooks";
import Search from "./components/Search";

function App() {
  const [books, setBooks] = useState([]);
  const updateBooks = async () => {
    console.log("updating books");
    const res = await BooksAPI.getAll();
    console.log(res);
    return setBooks(res);
  };

  useEffect(() => {
    let isUpdating = true;
    if (isUpdating === true) updateBooks();

    return () => {
      isUpdating = false;
    };
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ListBooks books={books} handleUpdateBooks={() => updateBooks} />
          }
        />
        <Route
          exact
          path="/search"
          element={<Search addBook={() => updateBooks} />}
        />
      </Routes>
    </div>
  );
}

export default App;
