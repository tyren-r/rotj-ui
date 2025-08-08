import SearchBar from '../../search/search-bar/SearchBar';
import SearchResultsTable from '../../search/search-results/ResultTable';
import './search-page-styles.css';

const SearchPage = () => {
    return (
        <div id="page">
            <h1 id="title">SWAPI</h1>
            <SearchBar />
            <SearchResultsTable />
        </div>
    );
};

export default SearchPage;
