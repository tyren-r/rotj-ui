import { useMemo } from 'react';
import { useSearchResultsContext } from '../../../context';
import SearchBar from '../../search/search-bar/SearchBar';
import SearchResultsTable from '../../search/search-results/ResultTable';
import '../styles/search-page-styles.css';

const SearchPage = () => {
    const { searchResults } = useSearchResultsContext();
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
