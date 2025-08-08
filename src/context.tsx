import { useState, useMemo, createContext, useContext } from 'react';
import type { functionalComponentProps, searchResultsContext } from '../types.d.ts';

// TODO must be a better way to set this initial type value then a made up function
const SearchResultsContext = createContext<searchResultsContext >({searchResults:[],setSearchResults(newSearchResults) {},});
export const SearchResultsContextProvider:React.FC<functionalComponentProps> = ({ children }) => {
    const [searchResults, setSearchResults] = useState();
    const contextProviderValue = useMemo(() => ({
        searchResults,
        setSearchResults,
    }), [searchResults]);
    return (
        <SearchResultsContext.Provider value={contextProviderValue}>
            {children}
        </SearchResultsContext.Provider>
    );
};

export const useSearchResultsContext = () => useContext(SearchResultsContext);
