import { useState, useMemo, createContext, useContext } from 'react';
import type { functionalComponentProps } from '../types.d.ts';

const SearchResultsContext = createContext({});
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
