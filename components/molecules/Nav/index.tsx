import React from 'react';
import NavItem from '@/components/atoms/NavItem';

interface NavProps {
  className?: string;
}

const Nav = ({className} : NavProps) => {
  return (
    <nav>
      <ul className={className}>
        <NavItem href="/product">PRODUCT</NavItem>
        <NavItem href="/digitalization">DIGITALIZATION</NavItem>
        <NavItem href="/company">COMPANY</NavItem>
        <NavItem href="/mobile-app">MOBILE APP</NavItem>
        <NavItem href="/mobile-app">MOBILE APP</NavItem>
      </ul>
    </nav>
  );
};

export default Nav;
