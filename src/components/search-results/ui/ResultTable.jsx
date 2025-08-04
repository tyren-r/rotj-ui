import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import '../styles/search-results-styles.css';
import ResultEntry from './ResultEntry';

const SearchResultsTable = ({ data }) => {
    return (
        <div className="table-container">
            <TableContainer>
                <Table>
                    {data.map((resultEntry) => (
                        <ResultEntry resultEntry={resultEntry} />
                    ))}
                </Table>
            </TableContainer>
        </div>
    );
};

export default SearchResultsTable;
