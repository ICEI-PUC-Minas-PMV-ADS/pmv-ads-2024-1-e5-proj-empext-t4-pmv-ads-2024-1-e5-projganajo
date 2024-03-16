
import Navbar from '../Navbar/Navbar.tsx';
import Home from '../Pages/Home/Home.tsx';
import React, { ReactNode } from 'react';
import './Layout.css'; 
import { Button } from 'react-bootstrap';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return( 
        <div className="layout-container">
        <header>
            <Navbar/>
        </header>
        <main>
            {children}
        </main>
        </div>
        );
    };
    
export default Layout;