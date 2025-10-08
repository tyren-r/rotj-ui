import { createContext } from "react";
import type { SearchResultsContextType } from "../types";

const SearchResultsContext = createContext<SearchResultsContextType>({
  searchResults: undefined,
  setSearchResults: () => {},
  isLoading: false,
  setIsLoading: () => {},
});

export default SearchResultsContext;
