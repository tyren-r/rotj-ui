import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import { useSearchResultsContext } from '../../../context';
import './search-results-styles.css';
import ResultEntry from './ResultEntry';
import type { APIResponseObject } from '../../../../types';

const SearchResultsTable = () => {
    const { searchResults } = useSearchResultsContext();
    return (
        searchResults && (
            <TableContainer id="table-container">
                <Table>
                    {searchResults.map((resultEntry:APIResponseObject) => (
                        <ResultEntry resultEntry={resultEntry} />
                    ))}
                </Table>
            </TableContainer>
        )
    );
};

export default SearchResultsTable;
