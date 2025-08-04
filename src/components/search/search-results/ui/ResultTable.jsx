import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import { useSearchResultsContext } from '../../../../context';
import '../styles/search-results-styles.css';
import ResultEntry from './ResultEntry';

const SearchResultsTable = () => {
    const { searchResults } = useSearchResultsContext();
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
