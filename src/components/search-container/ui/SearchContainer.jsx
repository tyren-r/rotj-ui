import { useMemo } from 'react';
import SearchBar from '../../search-bar/ui/SearchBar';
import SearchResultsTable from '../../search-results/ui/ResultTable';

import SearchContainerLogic from '../logic/useSearchContainerLogic';
import '../styles/search-container-styles.css';

const SearchContainer = () => {
    const { searchResults, search_the_api } = SearchContainerLogic();
    const resultsTable = useMemo(
        () => <SearchResultsTable data={searchResults} />,
        [searchResults]
    );
    return (
        <div className="container">
            <h1 id="title">SWAPI</h1>
            <SearchBar searchMethod={search_the_api} />
            {searchResults ? resultsTable : null}
        </div>
    );
};

export default SearchContainer;
