// components/templates/Layout.tsx
import React from "react";
import Header from "@/components/organisms/Header";
import styles from "@/app/page.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      {/* Footer 영역 */}
    </>
  );
};

export default Layout;
