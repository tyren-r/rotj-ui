import { useState, useMemo, createContext, useContext } from 'react';

const SearchResultsContext = createContext(null);
export const SearchResultsContextProvider = ({ children }) => {
    const [searchResults, setSearchResults] = useState();
    const contextProviderValue = useMemo(() => ({
        searchResults,
        setSearchResults,
    }));
    return (
        <SearchResultsContext.Provider value={contextProviderValue}>
            {children}
        </SearchResultsContext.Provider>
    );
};

export const useSearchResultsContext = () => useContext(SearchResultsContext);
