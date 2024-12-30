import { useState } from 'react';

function useSearchBarLogic() {
    const [searchTerm, setSearchTerm] = useState();

    return { searchTerm, setSearchTerm };
  }
  
  export default useSearchBarLogic;