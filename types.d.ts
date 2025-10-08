import { SetStateAction } from "react";

export interface FunctionalComponentProps {
  children: React.ReactNode;
}

export interface SearchResultsContextType {
  searchResults: APIResponseObject[] | undefined;
  setSearchResults: SetStateAction<APIResponseObject[] | undefined>;
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
