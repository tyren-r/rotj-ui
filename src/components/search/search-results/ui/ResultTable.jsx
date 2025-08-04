import { useContext } from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import { searchResultsContext } from '../../../../App';
import '../styles/search-results-styles.css';
import ResultEntry from './ResultEntry';

const SearchResultsTable = () => {
    const { searchResults } = useContext(searchResultsContext);
    return (
        searchResults && (
            <TableContainer className="table-container">
                <Table>
                    {searchResults.map((resultEntry) => (
                        <ResultEntry resultEntry={resultEntry} />
                    ))}
                </Table>
            </TableContainer>
        )
    );
};

export default SearchResultsTable;
