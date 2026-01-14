import "./documentation-page-styles.css";
import Box from "@mui/material/Box";
import { useDocumentationPageLogic } from "./useDocumentationPageLogic";

const DocumentationPage: React.FC = () => {
  const { loadError } = useDocumentationPageLogic();

  return (
    <Box role="main" aria-label="API documentation">
      {loadError ? (
        <div role="alert" className="swagger-error">
          {loadError}
        </div>
      ) : (
        <div id="swagger-container" className="swagger-ui" aria-live="polite" />
      )}
    </Box>
  );
};
export default DocumentationPage;
