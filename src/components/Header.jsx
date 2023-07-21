import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import { IconButton } from '@mui/material';
import { Menu } from "../components";

const Header = () => {
  return (
    <>
      <header className="app-header">
        <h1>NC News</h1>
        <div className="menu-button">
          <IconButton aria-label="open/close menu" size="large">
            <MenuOpenOutlinedIcon fontSize="large"/>
          </IconButton>
        </div>
      </header>
      <Menu/>
    </>
  );
};

export default Header;
