import React from 'react';
import Link from 'next/link';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, children, className }) => {
  return (
    <li className={className}>
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default NavItem;