import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import "./documentation-page-styles.css";
import Box from "@mui/material/Box";

const DocumentationPage: React.FC = () => {
  return (
    <Box role="main" aria-label="API documentation">
      <SwaggerUI url="http://localhost:8000/openapi.json" />
    </Box>
  );
};
export default DocumentationPage;
