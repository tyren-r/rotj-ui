import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css'; 
import './documentation-page-styles.css';

const DocumentationPage: React.FC = () => {
    return <SwaggerUI url="http://localhost:8000/openapi.json" />;
}
export default DocumentationPage;