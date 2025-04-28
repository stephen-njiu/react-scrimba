import React from 'react';
import reactLogo from '/src/assets/react.svg'; 

export default function Header() {
  return (
    <header>
      <div className="header-content">
        <img src={reactLogo} alt="react logo" className='react-logo' />
        <h1>ChefAI</h1>
      </div>
    </header>
  );
}
