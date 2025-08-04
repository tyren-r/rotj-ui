import { useState, useMemo, createContext } from 'react';
import SearchPage from './components/pages/search-page/ui/SearchPage';

export const searchResultsContext = createContext(null);
const App = () => {
    const [searchResults, setSearchResults] = useState();
    const contextProviderValue = useMemo(() => ({
        searchResults,
        setSearchResults,
    }));
    return (
        <searchResultsContext.Provider value={contextProviderValue}>
            <>
                <div id="stars" />
                <div id="stars2" />
                <div id="stars3" />
                <SearchPage />
            </>
        </searchResultsContext.Provider>
    );
};

export default App;
