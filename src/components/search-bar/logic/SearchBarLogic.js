import { useState } from 'react';

function SearchBarLogic() {
    const [searchTerm, setSearchTerm] = useState();

    return { searchTerm, setSearchTerm };
  }
  
  export default SearchBarLogic;