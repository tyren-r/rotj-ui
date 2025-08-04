import { useMemo } from 'react';
import SearchBar from '../../search-bar/ui/SearchBar';
import SearchResultsTable from '../../search-results/ui/ResultTable';

import SearchContainerLogic from '../logic/useSearchContainerLogic';
import '../styles/search-container-styles.css';

const SearchContainer = () => {
    const { searchResults, searchTheApi } = SearchContainerLogic();
    const resultsTable = useMemo(
        () => <SearchResultsTable data={searchResults} />,
        [searchResults]
    );
    return (
        <div className="container">
            <h1 id="title">SWAPI</h1>
            <SearchBar searchMethod={searchTheApi} />
            {searchResults ? resultsTable : null}
        </div>
    );
};

export default SearchContainer;
