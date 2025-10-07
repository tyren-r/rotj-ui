import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./about-page-styles.css";
import aboutTextJson from "./about-page-text.json";

const AboutPage: React.FC = () => (
  <Box id="about-page-container">
    {aboutTextJson.map((section) => (
      <Card variant="outlined" className="about-section" key={section.title}>
        <CardContent>
          <Typography gutterBottom variant="h4" align="center">
            {section.title}
          </Typography>
          <Typography gutterBottom variant="body1" paragraph>
            {section.paragraph}{" "}
          </Typography>
        </CardContent>
      </Card>
    ))}
  </Box>
);
export default AboutPage;
