export interface functionalComponentProps{
    children: React.ReactNode;
}

export interface searchResultsContext {
      searchResults: Array;
      setSearchResults: (newSearchResults: Array) => void;
    }