import { useMemo, useContext } from 'react';
import { searchResultsContext } from '../../../../App';
import SearchBar from '../../../search/search-bar/ui/SearchBar';
import SearchResultsTable from '../../../search/search-results/ui/ResultTable';
import '../styles/search-page-styles.css';

const SearchPage = () => {
    const { searchResults } = useContext(searchResultsContext);
    const resultsTable = useMemo(() => <SearchResultsTable />, [searchResults]);

    return (
        <div id="page">
            <h1 id="title">SWAPI</h1>
            <SearchBar />
            {resultsTable}
        </div>
    );
};

export default SearchPage;
