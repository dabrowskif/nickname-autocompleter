import React from 'react';

import WelcomeInfo from './WelcomeInfo/WelcomeInfo';
import NicknamePanel from './NicknamePanel/NicknamePanel';
import './styles.css';

function Home() {
  return (
    <div className="home">
      <WelcomeInfo />
      <NicknamePanel />
    </div>
  );
}

export default Home;
