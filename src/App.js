import { React, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import * as BooksAPI from "./BooksAPI";
import ListBooks from "./components/ListBooks";
import Search from "./components/Search";
// import { Book } from "./models/Book";

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };

    getBooks();
  }, []);

  console.log(books);

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<ListBooks />} />
        <Route exact path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
