import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
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

  return (
    <Card variant="outlined" className="result-entry-card">
      <CardMedia className="result-entry-image" image={resultEntry.image_url} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {resultEntry.name}
        </Typography>
        <Typography gutterBottom variant="body2">
          {resultEntry.description}
        </Typography>
        <Table>
          {Object.entries(resultEntryWithoutCommonFields).map(
            ([key, value]) => (
              <TableRow>
                <TableCell className="table-cell">
                  <Typography variant="body2">
                    {key.replaceAll("_", " ")}
                  </Typography>
                </TableCell>
                <TableCell className="table-cell">
                  <Typography variant="body2">
                    {/* 
// @ts-expect-error The value variable is a string, but unsure how to properly get ts to recognize TODO*/}
                    {value}
                  </Typography>
                </TableCell>
              </TableRow>
            ),
          )}
        </Table>
      </CardContent>
    </Card>
  );
};

export default ResultEntry;
