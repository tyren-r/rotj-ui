import SearchResultsContextProvider from "../../../SearchResultsContextProvider";
import SearchBar from "../../search/search-bar/SearchBar";
import SearchResultsTable from "../../search/search-results/ResultTable";
import "./search-page-styles.css";
import LoadingSpinner from "../../search/loading-spinner/LoadingSpinner";
import { Box } from "@mui/material";
import { useEffect } from "react";

const SearchPage = () => {
  useEffect(() => {
    document.title = "Search Star Wars Data | SWAPI: ROTJ";
    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute(
      "content",
      "Search Star Wars characters, vehicles, planets, movies and species from SWAPI: Return of the Jedi."
    );
    const canonical = document.querySelector('link[rel="canonical"]');
    canonical?.setAttribute("href", `${window.location.origin}/`);
  }, []);

  return (
    <SearchResultsContextProvider>
      <Box id="page" role="main" aria-labelledby="title">
        <h1 id="title">SWAPI: Return of the Jedi</h1>
        <p id="subtitle">The newest iteration of the Star Wars API</p>
        <SearchBar />
        <LoadingSpinner />
        <SearchResultsTable />
      </Box>
    </SearchResultsContextProvider>
  );
};

export default SearchPage;
