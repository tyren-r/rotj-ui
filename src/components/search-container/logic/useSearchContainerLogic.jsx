import { useState } from 'react';
import axios from "axios";

function useSearchContainerLogic() {
    const [searchResults, setSearchResults] = useState();

    const search_the_api = async (searchType,searchValue) => {
      try {
        // await axios.get(`https://swapi.tech/api/people/?name=${searchParam}`)
        await axios.get(`http://localhost:8000/${searchType}/${searchValue}`)
        .then( async (response) => {
          setSearchResults(response.data);
        });
      } catch (error) {
        alert(error);
      }
    };

    return { searchResults, search_the_api };
  }
  
  export default useSearchContainerLogic;