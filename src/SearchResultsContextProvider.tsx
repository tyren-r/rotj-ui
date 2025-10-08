import { useState, useMemo } from "react";
import type { FunctionalComponentProps, APIResponseObject } from "../types";
import SearchResultsContext from "./SearchResultsContext";

const SearchResultsContextProvider: React.FC<FunctionalComponentProps> = ({
  children,
}) => {
  const [searchResults, setSearchResults] = useState<APIResponseObject[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const contextProviderValue = useMemo(
    () => ({
      searchResults,
      setSearchResults,
      isLoading,
      setIsLoading,
    }),
    [searchResults, isLoading],
  );
  return (
    <SearchResultsContext.Provider value={contextProviderValue}>
      {children}
    </SearchResultsContext.Provider>
  );
};

export default SearchResultsContextProvider;
