import { createContext } from 'react';
import type { SearchResultsContextType } from '../types';

const SearchResultsContext = createContext<SearchResultsContextType | null>(
    null
);

export default SearchResultsContext;
