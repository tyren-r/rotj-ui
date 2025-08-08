import { useContext } from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import SearchResultsContext from '../../../SearchResultsContext';
import './search-results-styles.css';
import ResultEntry from './ResultEntry';
import type { APIResponseObject } from '../../../../types';

const SearchResultsTable = () => {
    const { searchResults } = useContext(SearchResultsContext);
    return (
        searchResults && (
            <TableContainer id="table-container">
                <Table>
                    {searchResults.map((resultEntry: APIResponseObject) => (
                        <ResultEntry resultEntry={resultEntry} />
                    ))}
                </Table>
            </TableContainer>
        )
    );
};

export default SearchResultsTable;
