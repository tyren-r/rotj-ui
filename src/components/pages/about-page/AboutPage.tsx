import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./about-page-styles.css";
import aboutTextJson from "./about-page-text.json";

const AboutPage: React.FC = () => (
  <Box id="about-page-container" component="main" role="main" aria-label="About SWAPI: ROTJ">
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
    <Card variant="outlined" className="about-section">
      <CardContent>
        <Typography gutterBottom variant="h4" align="center">
          Attributions
        </Typography>
        <Typography gutterBottom variant="body1" paragraph>
          <a
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
            href="https://icons8.com/icon/QqhR3q5pMyCZ/jedi"
          >
            Jedi
          </a>{" "}
          icon by{" "}
          <a
            style={{ color: "inherit" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://icons8.com"
          >
            Icons8
          </a>
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
            href="https://icons8.com/icon/8113/menu"
          >
            Menu
          </a>{" "}
          icon by{" "}
          <a
            style={{ color: "inherit" }}
            target="_blank"
            rel="noopener noreferrer"
            href="https://icons8.com"
          >
            Icons8
          </a>
          <br />
          Starry parallax background orignally from{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
            href="https://codepen.io/sarazond/pen/LYGbwj"
          >
            sarazond CSS Starry Parallax
          </a>
          , modified for React.
          <br />
          Json Data has been heavily modified but originally from{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit" }}
            href="https://github.com/semperry/swapi"
          >
            Original SWAPI Github Copy
          </a>{" "}
          but it looks like the json data may have been removed from the repo.
        </Typography>
      </CardContent>
    </Card>
  </Box>
);
export default AboutPage;
