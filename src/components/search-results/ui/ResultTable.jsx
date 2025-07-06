import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../styles/search-results-styles.css';

function SearchResultsTable(props) {
  return (
    <div className="table-container">
    <TableContainer component={Paper}>
      <Table sx={{backgroundColor:'grey'}}  aria-label="simple table">
        <TableHead>
          <TableRow key={1}>
            {Object.keys(props.data[0]).map((headerValue)=>(
              <TableCell sx={{color:'white'}} component="th" scope="row">{headerValue}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
              <TableRow
            >
              {props.data.map((resultEntry)=> (
                Object.values(resultEntry).map((resultValue)=>(
                console.log(resultValue),
                <TableCell sx={{color:'white'}}>{resultValue}</TableCell>
                )
              )))}
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default SearchResultsTable;