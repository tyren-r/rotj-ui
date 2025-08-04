import { useState, useContext } from 'react';
import axios from 'axios';
import { searchResultsContext } from '../../../../App';

function useSearchBarLogic() {
    const [searchTerm, setSearchTerm] = useState();
    const [searchType, setSearchType] = useState('characters');
    const { setSearchResults } = useContext(searchResultsContext);

    const searchTheApi = async () => {
        try {
            let url = '';
            if (searchTerm) {
                url = `http://localhost:8000/${searchType}/${searchTerm}`;
            } else {
                url = `http://localhost:8000/${searchType}`;
            }
            await axios.get(url).then(async (response) => {
                const newResponseData = [];
                response.data.forEach((searchResultItem) => {
                    newResponseData.push({
                        ...searchResultItem,
                        image: `http://localhost:8000/images/${searchType}/${searchResultItem.name}.png`,
                    });
                });
                setSearchResults(newResponseData);
            });
        } catch (error) {
            alert(error);
        }
    };

    return {
        searchTerm,
        searchType,
        setSearchTerm,
        setSearchType,
        searchTheApi,
    };
}

export default useSearchBarLogic;
