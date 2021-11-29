import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader, Logo, LogoTitle, Links } from './styled';
import logoImg from 'assets/icons/logo.png';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Logo>
        <img src={logoImg} width={40} height={40} alt="logo" />
        <LogoTitle>Supremacy SMS</LogoTitle>
      </Logo>
      <Links>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
      </Links>
    </StyledHeader>
  );
};

export default Header;
