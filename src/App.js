import { React } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ListBooks from "./components/ListBooks";
import Search from "./components/Search";

function App() {
  // const [showSearchPage, setShowSearchpage] = useState(false);

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
