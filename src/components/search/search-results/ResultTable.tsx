import { useContext } from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import SearchResultsContext from '../../../SearchResultsContext';
import Typography from '@mui/material/Typography';
import './search-results-styles.css';
import ResultEntry from './ResultEntry';
import type { APIResponseObject } from '../../../../types';

const SearchResultsTable = () => {
    const { searchResults } = useContext(SearchResultsContext);
    return searchResults && searchResults.length > 0 ? (
        <TableContainer id="table-container">
            <Table>
                {searchResults.map((resultEntry: APIResponseObject) => (
                    <ResultEntry resultEntry={resultEntry} />
                ))}
            </Table>
        </TableContainer>
    ) : searchResults && searchResults.length === 0 ? (
        <Typography mt={3} variant="h4" color={'white'}>
            No results found for that term
        </Typography>
    ) : null;
};

export default SearchResultsTable;
