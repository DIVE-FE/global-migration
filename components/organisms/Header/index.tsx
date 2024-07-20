import React from 'react';
import Nav from '@/components/molecules/Nav';
import Link from 'next/link';
import Image from 'next/Image';


const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='header-wrap'>
        <Link href="/">
          <Image src="https://image.smartscore.kr/smartscore_gloabl/logo/smartscore_global_logo_black.svg" alt="스마트스코어 로고" width={200} height={40} />
        </Link>
        <div className='gnb-wrap'>
          <Nav className='gnb'/>
        </div>
      </div>
    </header>
  );
};

export default Header;