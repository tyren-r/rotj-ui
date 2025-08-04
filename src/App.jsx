import SearchPage from './components/pages/search-page/ui/SearchPage';
import { SearchResultsContextProvider } from './context';

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
