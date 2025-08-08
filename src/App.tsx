import SearchPage from './components/pages/search-page/SearchPage';
import SearchResultsContextProvider from './SearchResultsContextProvider';

const App = () => {
    return (
        <SearchResultsContextProvider>
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
            <SearchPage />
        </SearchResultsContextProvider>
    );
};

export default App;
