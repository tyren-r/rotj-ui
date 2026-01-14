import React, { useContext } from "react";
import "./loading-spinner.css";
import SearchResultsContext from "../../../SearchResultsContext";
import Typography from "@mui/material/Typography";
import type { LoadingSpinnerProps } from "../../../../types";

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  forceVisible = false,
}) => {
  const { isLoading } = useContext(SearchResultsContext);
  const shouldShow = forceVisible || isLoading;

  if (!shouldShow) return null;

  return (
    <div id="loadingSpinnerWrapper">
      <div
        id="loadingSpinner"
        role="status"
        aria-live="polite"
        aria-busy="true"
        aria-label="Loading content"
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
