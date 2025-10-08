import { useContext } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import SearchResultsContext from "../../../SearchResultsContext";
import Typography from "@mui/material/Typography";
import "./search-results-styles.css";
import ResultEntry from "./ResultEntry";
import type { APIResponseObject } from "../../../../types";
import LoadingSpinner from "../loading-spinner/LoadingSpinner";
import { TableCell, TableRow } from "@mui/material";

const SearchResultsTable = () => {
  const { searchResults } = useContext(SearchResultsContext);
  return searchResults && searchResults.length > 0 ? (
    <TableContainer id="table-container">
      <Table>
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
    <Typography mt={3} variant="h4" color={"white"}>
      No results found for that term
    </Typography>
  ) : <LoadingSpinner/>;
};

export default SearchResultsTable;
