import React, { useState } from 'react'
import Logo from '../img/logo full-small.png'
import { BsCart2 } from 'react-icons/bs'
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text: 'Walk Cycle',
            // icon: <HomeIcon />,
        },
        {
            text: "Merch",
            style: { opacity: 0.5 },
        },
        {
            text: "PFP",
            style: { opacity: 0.5 },
        },
    ];

  return <nav>
    <div className='nav-logo-contaier'>
        <a href=''><img src={Logo} alt="" /></a>
    </div>
    <div>
    <div className="navbar-links-container">
        <a href="">Walk Cycle</a>
        <a href="" className='inactive'>Merch</a>
        <a href="" className='inactive'>PFP</a>
        <button className="primary-button"> Buy A Walking Fren </button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} style={item.style} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </div>
  </nav>
}

export default Navbar