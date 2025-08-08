import { useState, useMemo } from 'react';
import type { FunctionalComponentProps } from '../types';
import SearchResultsContext from './SearchResultsContext';

const SearchResultsContextProvider: React.FC<FunctionalComponentProps> = ({
    children,
}) => {
    const [searchResults, setSearchResults] = useState();
    const contextProviderValue = useMemo(
        () => ({
            searchResults,
            setSearchResults,
        }),
        [searchResults]
    );
    return (
        <SearchResultsContext.Provider value={contextProviderValue}>
            {children}
        </SearchResultsContext.Provider>
    );
};

export default SearchResultsContextProvider;
