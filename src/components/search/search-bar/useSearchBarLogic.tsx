import { useState, useContext } from 'react';
import axios from 'axios';
import SearchResultsContext from '../../../SearchResultsContext';
import type { APIResponseObject } from '../../../../types';

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
    const addImageFieldsToResponseData = (
        responseData: APIResponseObject[]
    ) => {
        const ResponseDataWithImageURLs: APIResponseObject[] = [];
        responseData.forEach((searchResultItem) => {
            ResponseDataWithImageURLs.push({
                ...searchResultItem,
                image: `http://localhost:8000/images/${searchType}/${searchResultItem.name}.png`,
            });
        });
        return ResponseDataWithImageURLs;
    };
    const searchTheApi = async () => {
        try {
            const url = createDynamicURL();
            await axios.get(url).then(async (response) => {
                const searchResultsWithImageURLs = addImageFieldsToResponseData(
                    response.data
                );
                setSearchResults(searchResultsWithImageURLs);
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
