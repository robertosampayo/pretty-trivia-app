import styled from "styled-components";
import { device } from "../../styles/devices";

export const NavBarContainer = styled.nav`
  height: 100px;
  width: 100vw;
  background-color: #303a2b;
  position: relative;
  display: flex;
  text-align: center;
  align-items: center;

  @media (min-width: ${device.mobileS}) {
  }
`;

export const H1 = styled.h1`
  color: white;
  font-weight: bold;
  text-align: center;
  width: 80%;
  margin: 0 auto;
`;
