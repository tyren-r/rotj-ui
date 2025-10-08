import React, { useContext } from "react";
import "./loading-spinner.css";
import SearchResultsContext from "../../../SearchResultsContext";


const LoadingSpinner: React.FC = () => {
  const { isLoading } = useContext(SearchResultsContext);
  if (!isLoading) return null;

  return (
    <div id="loadingSpinnerWrapper">
      <div
        id="loadingSpinner"
        role="status"
        aria-live="polite"
        aria-busy="true"
      >
        <img
          src="jedi-96.png"
          alt="Loading"
          id="spinnerImage"
          style={{ width: 180, height: 180 }}
        />
        <span id="spinnerText">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
