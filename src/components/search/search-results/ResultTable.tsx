import { useContext } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import SearchResultsContext from "../../../SearchResultsContext";
import "./search-results-styles.css";
import ResultEntry from "./ResultEntry";
import type { APIResponseObject } from "../../../../types";
import LoadingSpinner from "../loading-spinner/LoadingSpinner";
import { TableCell, TableRow } from "@mui/material";
import Typography from "@mui/material/Typography";

const SearchResultsTable = () => {
  const { searchResults } = useContext(SearchResultsContext);
  return searchResults && searchResults.length > 0 ? (
    <TableContainer id="table-container" role="region" aria-label="Search results">
      <Table aria-label="Search results table">
        <TableBody>
          {searchResults.map((resultEntry: APIResponseObject) => (
            <TableRow key={resultEntry.id}>
              <TableCell className="table-row">
                <ResultEntry resultEntry={resultEntry} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : searchResults && searchResults.length === 0 ? (
    <div id="noResultsWrapper" role="status" aria-live="polite" aria-atomic="true">
      <Typography id="noResultsText" variant="h5" color="inherit">
        No results found for that term
      </Typography>
    </div>
  ) : (
    <LoadingSpinner />
  );
};

export default SearchResultsTable;
