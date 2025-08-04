import { useState } from 'react';
import axios from 'axios';

function useSearchContainerLogic() {
    const [searchResults, setSearchResults] = useState();

    const searchTheApi = async (searchType, searchValue) => {
        try {
            let url = '';
            if (searchValue) {
                url = `http://localhost:8000/${searchType}/${searchValue}`;
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

    return { searchResults, searchTheApi };
}

export default useSearchContainerLogic;
