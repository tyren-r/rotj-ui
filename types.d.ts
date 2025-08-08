export interface FunctionalComponentProps{
    children: React.ReactNode;
}

export interface SearchResultsContext {
      searchResults: Array;
      setSearchResults: (newSearchResults: Array) => void;
    }