import { useState, useMemo, createContext, useContext } from 'react';
import type { FunctionalComponentProps, SearchResultsContext } from '../types.d.ts';

// TODO must be a better way to set this initial type value then a made up function
const SearchResultsContext = createContext<SearchResultsContext >({searchResults:[],setSearchResults(newSearchResults) {},});
export const SearchResultsContextProvider:React.FC<FunctionalComponentProps> = ({ children }) => {
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
