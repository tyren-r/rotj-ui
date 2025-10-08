import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import type { ResultEntryProps } from "../../../../types";
import "./search-results-styles.css";

const ResultEntry: React.FC<ResultEntryProps> = ({ resultEntry }) => {
  const {
    id,
    name,
    description,
    image_url,
    ...resultEntryWithoutCommonFields
  } = resultEntry;

  // Treat remaining fields as a generic record to get properly typed entries
  const resultEntryFields = Object.entries(
    resultEntryWithoutCommonFields as Record<string, unknown>
  );

  return (
    <Card variant="outlined" className="result-entry-card">
      <CardMedia className="result-entry-image" image={resultEntry.image_url} />
      <CardContent className="result-entry-content">
        <Typography gutterBottom variant="h5" component="div">
          {resultEntry.name}
        </Typography>
        <Typography gutterBottom variant="body2">
          {resultEntry.description}
        </Typography>
        <Table id="inner-table">
          <TableBody>
            {resultEntryFields.map(([key, value], i) => (
              // Using index as key since these keys are not unique and order won't change
              <TableRow key={i}>
                <TableCell className="table-cell">
                  <Typography variant="body2">
                    {key.replaceAll("_", " ")}
                  </Typography>
                </TableCell>
                <TableCell className="table-cell">
                  <Typography variant="body2">
                    {String(value)}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ResultEntry;
