import { useState, useMemo } from 'react';
import type { FunctionalComponentProps } from '../types';
import SearchResultsContext from './SearchResultsContext';

const SearchResultsContextProvider: React.FC<FunctionalComponentProps> = ({
    children,
}) => {
    const [searchResults, setSearchResults] = useState([
        { id: 1, name: 'a', description: 'b', image: 'c' },
    ]);
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
