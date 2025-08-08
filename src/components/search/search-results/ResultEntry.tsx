import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import './search-results-styles.css';

const ResultEntry = ({ resultEntry }) => {
    const { id, name, image, description, ...resultEntryWithoutCommonFields } =
        resultEntry;
    return (
        <Card variant="outlined" id="result-entry-card">
            <CardMedia id="result-entry-image" image={resultEntry.image} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {resultEntry.name}
                </Typography>
                <Typography gutterBottom variant="body2">
                    {resultEntry.description}
                </Typography>
                <Table>
                    {Object.entries(resultEntryWithoutCommonFields).map(
                        (resultKeyValuePair) => (
                            <TableRow>
                                <TableCell className="table-cell">
                                    <Typography variant="body2">
                                        {resultKeyValuePair[0].replaceAll(
                                            '_',
                                            ' '
                                        )}
                                    </Typography>
                                </TableCell>
                                <TableCell className="table-cell">
                                    <Typography variant="body2">
                                        {resultKeyValuePair[1]}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        )
                    )}
                </Table>
            </CardContent>
        </Card>
    );
};

export default ResultEntry;
