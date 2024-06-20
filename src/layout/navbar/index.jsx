import { useState } from "react";
import styles from "./Navbar.module.css"
import { Box, Button, Stack, useMediaQuery } from "@mui/material";
import logo from "../../assets/images/logo.svg";
import { NavLink, useMatch } from "react-router-dom";
import { KeyboardArrowDown, MarkChatUnread } from "@mui/icons-material";
import notification from "../../assets/images/notification.svg"

const NavItem = ({ handleMenuClose, item }) => {
  return (
    <li
      className={`${styles["nav-item"]} `}
      onClick={handleMenuClose}
    >
      <NavLink to={ "/"}>
        {item.product ? (
         <Stack  fontFamily="Gilroy-Medium" direction="row" alignItems="center">
           {item?.name } <KeyboardArrowDown/>

         </Stack> 
        ) : (
          item?.name
        )}
      </NavLink>
    </li>
  );
};

const navItems = [
  { name: "Furniture", product: true  },
  { name: "Shop" },
  { name: "About Us"},
  { name: "Contact"  },
 
];

const Navbar = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClose = () => {
    setShowMenu(false);
  };
  return (
    <div className={styles["nav-container"]}>
      <div className="container">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ py: 2, width: "100%" }}
        >
          <h2 className={`${styles["logo"]} ${
                  showMenu && styles["logo_active"]
                }`}>Panto</h2>
          <div className={styles["nav-desktop"]}>
            <ul className={styles["nav-list"]}>
              {navItems.map((item, index) => (
                <NavItem
                  key={index}
                  item={item}
                  handleMenuClose={handleMenuClose}
                />
              ))}
            </ul>
          </div>
          {!matches && <MarkChatUnread sx={{color:"#FFF"}}/>}
        

          <div className={styles["nav-mobile"]}>
            <Stack
              alignItems="center"
              direction="row"
              spacing={{ xs: 2, sm: 3, md: 4 }}
            >
             {matches && <MarkChatUnread sx={{color: showMenu ? "black" :"#FFF" , zIndex:5}}/>}
              <button
                onClick={() => setShowMenu((prev) => !prev)}
                className={`${styles["nav-btn"]} ${
                  showMenu && styles["active"]
                }`}
              ></button>
            </Stack>
            <div
              className={`${styles["nav-mobile-container"]} ${
                showMenu && styles["show"]
              }`}
            >
              <ul className={styles["nav-list"]}>
                {navItems.map((item, index) => (
                  <NavItem
                    key={index}
                    item={item}
                    handleMenuClose={ handleMenuClose
                    }
                  />
                ))}
              </ul>
            </div>
          </div>
        </Stack>
      </div>
    </div>
  );
};
export default Navbar;
