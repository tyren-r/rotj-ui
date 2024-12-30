import { useState } from 'react';

function useSearchResultsLogic() {
    const [tableData, setTableData] = useState();

    return { tableData, setTableData };
  }
  
  export default useSearchResultsLogic;