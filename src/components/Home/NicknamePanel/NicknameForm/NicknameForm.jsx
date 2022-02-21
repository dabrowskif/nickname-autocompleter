import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function NicknameForm({ onSubmit }) {
  return (
    <form id="formMainDiv" autoComplete="off" className="formMainDiv" onSubmit={onSubmit}>
      <input
        id="nicknameInput"
        className="nicknameInput"
        type="text"
        name="nickname"
        placeholder="nickname"
      />
      <input
        id="nicknameSubmit"
        className="nicknameSubmit"
        type="submit"
        value="+"
      />
    </form>
  );
}

NicknameForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NicknameForm;
