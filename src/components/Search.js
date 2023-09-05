import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title, author, or ISBN" />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
      <Link to={{ pathname: "/" }} className="close-search">
        Return Home
      </Link>
    </div>
  );
};

export default Search;
