import { useState } from 'react';
import axios from "axios";

function useSearchContainerLogic() {
    const [searchResults, setSearchResults] = useState();

    const getPersonInfo = async (searchParam) => {
      try {
        await axios.get(`https://swapi.dev/api/people/?search=${searchParam}`)
        .then( async (response) => {
          
        for(const person of response.data['results']){
          await axios.all(person['films'].map((link) => axios.get(link))).then(
            (data) => {
              let names = [];
              for(const film of data){
                names.push(film['data']['title']);
              }
              person['films'] = names;
            },
          );
          };
          setSearchResults(response.data['results']);
        });
      } catch (error) {
        alert(error);
      }
    };

    return { searchResults, getPersonInfo };
  }
  
  export default useSearchContainerLogic;