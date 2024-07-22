import React from 'react';
import Link from 'next/link';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, children, className, target }) => {
  return (
    <li className={className}>
      <Link href={href} target={target}>{children}</Link>
    </li>
  );
};

export default NavItem;
