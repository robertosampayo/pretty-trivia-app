import { FC } from "react";
import { NavBarContainer, H1 } from "./Navbar.style";

interface Props {
  title: string;
}

const NavBar: FC<Props> = ({ title }) => {
  return (
    <>
      <NavBarContainer>
        <H1>{title}</H1>
      </NavBarContainer>
    </>
  );
};

export default NavBar;
