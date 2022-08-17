import SearchBar from '../../search-bar/ui/SearchBar';
import SearchResultsTable from '../../search-results/ui/ResultTable';

import SearchContainerLogic from '../logic/SearchContainerLogic';
import '../styles/search-container-styles.css';

function SearchContainer() {
  const {searchResults, getPersonInfo, getSubNames} = SearchContainerLogic();
  return (
    <div className="container">
      <h1>A long time ago - in a galaxy far, far away...</h1>
      <SearchBar searchMethod={getPersonInfo} />
     { searchResults ? (<SearchResultsTable subNameGetter={getSubNames} data={searchResults} />) : (null) }
    </div>
  );
}

export default SearchContainer;
