import React, { useContext } from "react";
import "./loading-spinner.css";
import SearchResultsContext from "../../../SearchResultsContext";
import Typography from "@mui/material/Typography";

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
        aria-label="Loading results"
      >
        <img
          src="jedi-96.png"
          alt=""
          aria-hidden="true"
          id="spinnerImage"
          style={{ width: 180, height: 180 }}
        />
        <Typography
          id="spinnerText"
          variant="body1"
          color="inherit"
          component="span"
        >
          Loading...
        </Typography>
      </div>
    </div>
  );
};

export default LoadingSpinner;
