import React from "react";
import { AppBar, Container, Stack, Toolbar, Typography } from "@mui/material";
import { CiMenuBurger } from "react-icons/ci";
import { useTheme, Theme } from "@mui/material/styles";
import { useLayoutContext } from "../hooks";
import styles from "./Navbar.module.scss";

const themedStyles = (theme: Theme) => {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1
    }
  };
};

const Navbar = () => {
  const { toggleSidebar } = useLayoutContext();
  const theme = useTheme();

  return (
    <div className={styles.navparent}>
      <AppBar
        position="fixed"
        component={"nav"}
        sx={themedStyles(theme).appBar}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Stack
              gap={1}
              sx={{
                display: "flex",
                flexDirection: "row"
              }}
            >
              <CiMenuBurger
                style={{
                  backgroundColor: "transparent",
                  width: "5rem",
                  marginRight: "2rem",
                  marginTop: "0.5rem",
                  fontWeight: "2rem",
                  height: "2rem"
                }}
                onClick={() => toggleSidebar()}
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 1,
                  mt: 1,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  "&:hover": {
                    color: "orange"
                  }
                }}
              >
                second brain
              </Typography>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
