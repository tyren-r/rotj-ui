import SearchResultsContextProvider from "../../../SearchResultsContextProvider";
import SearchBar from "../../search/search-bar/SearchBar";
import SearchResultsTable from "../../search/search-results/ResultTable";
import "./search-page-styles.css";

const SearchPage = () => {
  return (
    <SearchResultsContextProvider>
      <div id="page">
        <h1 id="title">SWAPI: Return of the Jedi</h1>
        <p id="subtitle">The newest iteration of the Star Wars API</p>
        <SearchBar />
        <SearchResultsTable />
      </div>
    </SearchResultsContextProvider>
  );
};

export default SearchPage;
