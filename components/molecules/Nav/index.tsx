import React from "react";
import NavItem from "@/components/atoms/NavItem";
import { LanguageDropDownButton } from "@/components/molecules/DropDown";

interface NavProps {
  className?: string;
}

const Nav = ({ className }: NavProps) => {
  return (
    <nav>
      <ul className={className}>
        <NavItem href="/product">PRODUCT</NavItem>
        <NavItem href="/digitalization">DIGITALIZATION</NavItem>
        <NavItem href="/company">COMPANY</NavItem>
        <NavItem href="/mobile-app">MOBILE APP</NavItem>
        <NavItem href="/contact-us">CONTACT US</NavItem>
        <LanguageDropDownButton
          className={"change-lang-box select-lang"}
          countryCode={"EN"}
        />
      </ul>
    </nav>
  );
};

export default Nav;
