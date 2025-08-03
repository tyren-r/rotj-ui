import * as React from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import '../styles/search-results-styles.css';
import ResultEntry from './ResultEntry';

function SearchResultsTable(props) {
  return (
    <div className="table-container">
    <TableContainer >
      <Table>
        {props.data.map((resultEntry)=>(
          <ResultEntry resultEntry={resultEntry}/>
        ))}
      </Table>
    </TableContainer>
    </div>
  );
}

export default SearchResultsTable;