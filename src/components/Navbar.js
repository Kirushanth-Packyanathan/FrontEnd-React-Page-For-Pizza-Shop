import React, { useState } from "react";
import Logo from "../assets/pizzaLogo.png";
import { Link, useNavigate } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import "../styles/Navbar.css";

import {
  Button,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const menuOptions = [
  {
    text: "Home",
    icon: <HomeIcon />,
    path: "/",
  },
  {
    text: "Menu",
    icon: <MenuBookIcon />,
    path: "/menu",
  },
  {
    text: "About",
    icon: <InfoIcon />,
    path: "/about",
  },
  {
    text: "Contact",
    icon: <ContactPageIcon />,
    path: "/contact",
  },
];

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div>
      <div className={`navbar ${openLinks ? "open-links" : ""}`}>
        <div className="leftside">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="right-side">
          <Link to="/"> Home</Link>
          <Link to="/menu"> Menu</Link>
          <Link to="/about"> About</Link>
          <Link to="/contact"> Contact</Link>
          <Button className="reorder-icon" onClick={() => setOpenMenu(true)}>
            <ReorderIcon />
          </Button>
          <Drawer
            open={openMenu}
            onClose={() => setOpenMenu(false)}
            anchor="right"
          >
            <Box sx={{ width: 250 }} role="presentation">
              <List>
                {menuOptions.map((item) => (
                  <ListItem key={item.text} disablePadding>
                    <ListItemButton onClick={() => navigate(item.path)}>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
