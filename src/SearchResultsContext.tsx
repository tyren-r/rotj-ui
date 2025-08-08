import { createContext } from 'react';
import type { SearchResultsContextType } from '../types';

const SearchResultsContext = createContext<SearchResultsContextType>({
    searchResults: undefined,
    setSearchResults: undefined,
});

export default SearchResultsContext;
