import SearchBar from '../../search-bar/ui/SearchBar';
import SearchResultsTable from '../../search-results/ui/ResultTable';
import { useMemo } from 'react';

import SearchContainerLogic from '../logic/useSearchContainerLogic';
import '../styles/search-container-styles.css';

function SearchContainer() {
  const {searchResults, getPersonInfo, getSubNames} = SearchContainerLogic();
  const resultsTable = useMemo(()=><SearchResultsTable subNameGetter={getSubNames} data={searchResults} />,[getSubNames,searchResults])
  return (
    <div className="container">
      <h1 id='title'>A long time ago - in a galaxy far, far away...</h1>
      <SearchBar searchMethod={getPersonInfo} />
     { searchResults ? (resultsTable) : (null) }
    </div>
  );
}

export default SearchContainer;
