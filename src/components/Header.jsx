import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import { IconButton, createTheme, ThemeProvider } from "@mui/material";
import { Menu } from "../components";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const theme = createTheme({
    palette: {
      primary: {
        main: "#eeeeee",
      },
    },
  });

  return (
    <>
      <header className="app-header">
        <h1>NC News</h1>
        <div className="menu-button">
          <ThemeProvider theme={theme}>
            <IconButton aria-label="open/close menu" size="large" color="primary" onClick={()=>setOpenMenu(!openMenu)}>
              <MenuOpenOutlinedIcon fontSize="large" />
            </IconButton>
          </ThemeProvider>
        </div>
      </header>
      { openMenu ? <Menu/> : null }
    </>
  );
};

export default Header;
