// components/templates/Layout.tsx
import React from 'react';
import Header from '@/components/organisms/Header';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            {/* Footer 영역 */}
        </>
    );
};

export default Layout;
