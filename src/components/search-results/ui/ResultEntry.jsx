import * as React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import '../styles/search-results-styles.css';

const ResultEntry = (resultEntry) => {
    const { id, name,image,description, ...resultEntryWithoutCommonFields } = resultEntry.resultEntry;
    return(
    <div style={{display:'flex'}}>
    <Table style={{ flex: "0 0 75%" }}>
        <TableRow>
            <TableCell>
                <img height={200} width={200} src={resultEntry.resultEntry.image}/>
            </TableCell>
        </TableRow>
        <TableRow>
            <TableCell className='table-cell'>Name</TableCell>
            <TableCell className='table-cell'>{resultEntry.resultEntry.name}</TableCell>
        </TableRow>
        <TableRow>
            <TableCell className='table-cell'>Description</TableCell>
            <TableCell className='table-cell'>{resultEntry.resultEntry.description}</TableCell>
        </TableRow>
    </Table>

    <Table style={{ flex: 1 }}>
        {Object.entries(resultEntryWithoutCommonFields).map((resultKeyValuePair)=>(
            <TableRow>
                <TableCell className='table-cell'>{resultKeyValuePair[0]}</TableCell>
                <TableCell className='table-cell'>{resultKeyValuePair[1]}</TableCell>
            </TableRow>
                        ))
                    }
    </Table>
    </div>
);
}

export default ResultEntry;