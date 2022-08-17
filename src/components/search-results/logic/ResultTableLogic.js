import { useState } from 'react';

function SearchResultsLogic() {
    const [tableData, setTableData] = useState();

    return { tableData, setTableData };
  }
  
  export default SearchResultsLogic;