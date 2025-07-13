import { useState } from 'react';

function useSearchBarLogic() {
    const [searchTerm, setSearchTerm] = useState();
    const [searchType, setSearchType] = useState("all");

    return { searchTerm,searchType, setSearchTerm,setSearchType };
  }
  
  export default useSearchBarLogic;