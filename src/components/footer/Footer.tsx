import { AppBar, Toolbar, Typography, Link, Box } from "@mui/material";
import "./footer-styles.css";

const Footer = () => {
  return (
    <AppBar component="footer" id="footer-appbar">
      <Toolbar id="footer-toolbar">
        <Typography variant="caption" sx={{ flexGrow: 1 }}>
          © {new Date().getFullYear()} Tyren Rhinehart
        </Typography>
        <Box className="footer-links">
          <Link
            href="https://www.linkedin.com/in/tr95/"
            underline="hover"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/"
            underline="hover"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            GitHub
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
