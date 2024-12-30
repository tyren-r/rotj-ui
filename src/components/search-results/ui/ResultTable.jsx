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
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow key={1}>
            <TableCell component="th" scope="row">Name</TableCell>
            <TableCell component="th" scope="row">Height</TableCell>
            <TableCell component="th" scope="row">Mass</TableCell>
            <TableCell component="th" scope="row">Hair Color</TableCell>
            <TableCell component="th" scope="row">skin color</TableCell>
            <TableCell component="th" scope="row">Birth Year</TableCell>
            <TableCell component="th" scope="row">Films</TableCell>
            <TableCell component="th" scope="row">Species</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {props.data.map((person,index) => (
              <TableRow
              key={index}
            >
              <TableCell >{person.name}</TableCell>
              <TableCell >{person.height}</TableCell>
              <TableCell >{person.mass}</TableCell>
              <TableCell >{person.hair_color}</TableCell>
              <TableCell >{person.hair_color}</TableCell>
              <TableCell >{person.birth_year}</TableCell>
              <TableCell >{ person.films }</TableCell>
              <TableCell >{person.species}</TableCell>
            </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default SearchResultsTable;