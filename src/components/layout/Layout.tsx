import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import Snowfall from '../ui/Snowfall';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Snowfall />
      <Header />
      <main className="flex-grow pb-28 md:pb-0">
        {children}
      </main>
      <Footer />
    </div>
  );
};
