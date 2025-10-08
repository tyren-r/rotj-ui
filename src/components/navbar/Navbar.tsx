import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import { Link } from "react-router";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

import useNavBarLogic from "./useNavBarLogic";
import "./navbar-styles.css";

const pages = [
  { title: "Home", path: "/" },
  { title: "Documentation", path: "/docs" },
  { title: "About", path: "/about" },
];

function ResponsiveAppBar() {
  const { menuAnchor, OpenMenu, CloseMenu } = useNavBarLogic();

  return (
    <AppBar position="static" id="app-bar">
      <Container maxWidth={false}>
        <Toolbar disableGutters component="nav" aria-label="Primary navigation">
          <Box
            id="inner-container"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <div>
              <Link to="/" aria-label="Home">
                <img src="jedi-64.png" alt="Jedi Logo Image" />
              </Link>
            </div>

            <div>
              <IconButton
                id="nav-menu-button"
                size="medium"
                onClick={OpenMenu}
                aria-label="Open mobile navigation menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                aria-expanded={menuAnchor ? "true" : undefined}
              >
                <img src="menu-50.png" alt="" aria-hidden="true" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={menuAnchor}
                aria-labelledby="nav-menu-button"
                aria-label="Main navigation menu"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(menuAnchor)}
                onClose={CloseMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  ".MuiMenu-paper": {
                    backgroundColor: "black",
                  },
                }}
              >
                {pages.map((page) => (
                  <MenuItem onClick={CloseMenu} key={page.title}>
                    <Link to={page.path}>
                      <Typography color="white">{page.title}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </Box>
          <Box
            id="inner-container"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <div id="icon">
              <Link to="/" aria-label="Home">
                <img src="jedi-64.png" alt="" aria-hidden="true" />
              </Link>
            </div>
            <div id="pc-links">
              {pages.map((page) => (
                <Link
                  to={page.path}
                  key={page.title}
                  aria-label={page.title}
                  className="pc-link"
                >
                  <Typography>{page.title}</Typography>
                </Link>
              ))}
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
