import { useState, useContext } from 'react';
import axios from 'axios';
import SearchResultsContext from '../../../SearchResultsContext';

function useSearchBarLogic() {
    const [searchTerm, setSearchTerm] = useState<string>();
    const [searchType, setSearchType] = useState('characters');
    const { setSearchResults } = useContext(SearchResultsContext);

    const createDynamicURL = () => {
        let dynamicURL = '';
        if (searchTerm) {
            dynamicURL = `http://localhost:8000/${searchType}/${searchTerm}`;
        } else {
            dynamicURL = `http://localhost:8000/${searchType}`;
        }
        return dynamicURL;
    };

    const searchTheApi = async () => {
        try {
            const url = createDynamicURL();
            await axios.get(url).then(async (response) => {
                setSearchResults(response.data);
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
