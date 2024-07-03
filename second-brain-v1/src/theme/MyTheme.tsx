import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    grid: { main: string; dark: string };
  }

  interface PaletteOptions {
    grid?: { main: string; dark: string };
  }
}

declare module "@mui/material/Drawer" {
  interface DrawerPropsVariantOverrides {
    permanent: true;
    persistent: true;
    temporary: true;
    myVariant: true;
  }
}

const MyTheme = createTheme({
  palette: {
    primary: {
      main: "#024852",
      light: "#5ed3f0",
      dark: "darkOrange"
    },
    grid: {
      main: "rgba(0,0,0,0.1)",
      dark: "rgba(0,0,0,0.2)"
    }
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(2, 88, 60, 0.1)"
        }
      },
      variants: [
        {
          props: { variant: "myVariant" },
          style: {
            backgroundColor: "rgba(7, 85, 75, 0.2)"
          }
        }
      ]
    }
  }
});

export { MyTheme };
