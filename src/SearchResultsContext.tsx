import { createContext } from 'react';
import type { SearchResultsContextType } from '../types';

const SearchResultsContext = createContext<SearchResultsContextType>({
    searchResults: [],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setSearchResults(_) {},
});

export default SearchResultsContext;
