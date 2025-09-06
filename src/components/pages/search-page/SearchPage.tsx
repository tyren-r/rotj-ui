import SearchBar from '../../search/search-bar/SearchBar';
import SearchResultsTable from '../../search/search-results/ResultTable';
import './search-page-styles.css';

const SearchPage = () => {
    return (
        <div id="page">
            <h1 id="title">PYSWAPI</h1>
            <p id="subtitle">The Python Star Wars API</p>
            <SearchBar />
            <SearchResultsTable />
        </div>
    );
};

export default SearchPage;
