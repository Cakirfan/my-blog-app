import { useState } from "react";
import {
  DuslerLogo,
  Navbarr,
  Menu,
  MenuImage,
  MenuLink,
  MenuImageDiv,
  MenuImageShow,
  MenuImageShowLink,
} from "./NavbarStyles";

const Navbar = () => {
  const [show, setShow] = useState(false);

  // Dışarı tıklandığında menüyü gizlemek için bir işlev
  const handleMenuHide = () => {
    setShow(false);
  };

  return (
    <>
      <Navbarr>
        <DuslerLogo>Düşler Sokağı</DuslerLogo>
        <Menu>
          <MenuLink to="/about">About</MenuLink>
          <MenuLink to="/contact">Contact</MenuLink>
          <MenuImageDiv>
            <MenuImage
              src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295402_640.png"
              alt="..."
              onClick={() => setShow(!show)}
            />
            {show && (
              <MenuImageShow onClick={handleMenuHide}>
                <MenuImageShowLink to="/login">Login</MenuImageShowLink>
                <MenuImageShowLink to="/register">Register</MenuImageShowLink>
                <MenuImageShowLink to="/">Logout</MenuImageShowLink>
              </MenuImageShow>
            )}
          </MenuImageDiv>
        </Menu>
      </Navbarr>
      <div style={{ height: "4.7rem" }}></div>
    </>
  );
};

export default Navbar;
