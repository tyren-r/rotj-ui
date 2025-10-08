import { Dispatch, SetStateAction } from "react";

export interface FunctionalComponentProps {
  children: React.ReactNode;
}

export interface SearchResultsContextType {
  searchResults: APIResponseObject[] | undefined;
  setSearchResults: Dispatch<SetStateAction<APIResponseObject[] | undefined>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export interface APIResponseObject {
  id: number;
  name: string;
  description: string;
  image_url: string;
}

export interface ResultEntryProps {
  resultEntry: APIResponseObject;
}
