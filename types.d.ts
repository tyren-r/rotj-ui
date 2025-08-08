export interface FunctionalComponentProps {
    children: React.ReactNode;
}

export interface SearchResultsContext {
    searchResults: APIResponseObject[];
    setSearchResults: (newSearchResults: APIResponseObject[]) => void;
}

export interface APIResponseObject {
    id: number;
    name: string;
    description: string;
    image: string;
}

export interface ResultEntryProps {
    resultEntry: APIResponseObject;
}
