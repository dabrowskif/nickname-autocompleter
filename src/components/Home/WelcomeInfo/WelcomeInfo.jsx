import React from 'react';

import './styles.css';

function WelcomeInfo() {
  return (
    <div className="welcomeInfo">
      <h1 style={{ color: '#394f8a' }}>Welcome to autocompleter!</h1>
      <p style={{ fontSize: '20px' }}>Start typing your nickname and eventually some nice suggestions will pop up!</p>
    </div>
  );
}

export default WelcomeInfo;
