import React from 'react';
import Link from 'next/link';

interface NavItemProps {
  href: string;
  className?: string;
  target?: string;
  children: React.ReactNode;
}

const NavItem = ({ href, children, className, target }: NavItemProps) => {
  return (
    <li className={className}>
      <Link href={href} target={target}>{children}</Link>
    </li>
  );
};

export default NavItem;
