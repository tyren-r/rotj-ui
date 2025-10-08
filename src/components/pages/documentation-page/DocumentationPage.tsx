import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import "./documentation-page-styles.css";
import Box from "@mui/material/Box";
import { useEffect } from "react";

const DocumentationPage: React.FC = () => {
  useEffect(() => {
    document.title = "API Documentation | SWAPI: ROTJ";
    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute(
      "content",
      "Interactive OpenAPI documentation for SWAPI: Return of the Jedi.",
    );
    const canonical = document.querySelector('link[rel="canonical"]');
    canonical?.setAttribute("href", `${window.location.origin}/docs`);
  }, []);

  return (
    <Box role="main" aria-label="API documentation">
      <SwaggerUI url="http://localhost:8000/openapi.json" />
    </Box>
  );
};
export default DocumentationPage;
