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

const pages = [
  { title: "Home", path: "/" },
  { title: "Documentation", path: "/docs" },
  { title: "About", path: "/about" },
];

function ResponsiveAppBar() {
  const { menuAnchor, OpenMenu, CloseMenu } = useNavBarLogic();

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "black", boxShadow: "none" }}
    >
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
            }}
          >
            <div style={{ marginLeft: "5%" }}>
              <Link to="/">
                <img src="jedi-64.png" />
              </Link>
            </div>

            <div>
              <IconButton size="medium" onClick={OpenMenu}>
                <img src="menu-50.png" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={menuAnchor}
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
                  <MenuItem key={page.title}>
                    <Link to={page.path}>
                      <Typography sx={{ textAlign: "center" }}>
                        {page.title}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
            }}
          >
            <div style={{ marginLeft: "5%" }}>
              <Link to="/">
                <img src="jedi-64.png" />
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "10%",
              }}
            >
              {pages.map((page) => (
                <Link
                  to={page.path}
                  key={page.title}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginLeft: "20px",
                  }}
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
