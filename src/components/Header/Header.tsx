import { Wrapper, PolyhackTitle, Nav } from "./Header.styles";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Wrapper>
      <PolyhackTitle>polyhack.xyz</PolyhackTitle>
      <Nav>
        <Link to="/">wallets</Link>
        <Link to="/about">about</Link>
        <Link to="/contribute">contribute</Link>
      </Nav>
    </Wrapper>
  );
};
