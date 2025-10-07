import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./about-page-styles.css";
import aboutTextJson from "./about-page-text.json";

const AboutPage: React.FC = () => (
  <Box id="about-page-container">
    {aboutTextJson.map((section) => (
      <>
        <Typography gutterBottom variant="h4" align="center">
          {section.title}
        </Typography>
        <Typography gutterBottom variant="body1" paragraph>
          {section.paragraph}{" "}
        </Typography>
      </>
    ))}
  </Box>
);
export default AboutPage;
