'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import About from '@/components/About';
import Built from '@/components/Built';
import DSA from '@/components/DSA';
import Written from '@/components/Written';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'built':
        return <Built />;
      case 'dsa':
        return <DSA />;
      case 'written':
        return <Written />;
      default:
        return <About />;
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-1 p-8">
        {renderContent()}
      </main>
    </div>
  );
}
