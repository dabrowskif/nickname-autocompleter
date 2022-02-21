import React from 'react';

import './styles.css';

function LoadingCircle() {
  return (
    <div className="autocompleteListDivLoading">
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default LoadingCircle;
