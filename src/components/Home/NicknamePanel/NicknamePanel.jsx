import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { clearAutocompleteNicknameList, fetchAutocompleteList } from '../../../actions/autocompleteList';
import NicknameForm from './NicknameForm/NicknameForm';
import AutocompleteList from './AutocompleteList/AutocompleteList';
import './styles.css';

function NicknamePanel() {
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const changeInputValue = (value) => {
    setNickname(value);
    const nicknameInput = document.getElementById('nicknameInput');
    nicknameInput.value = value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(nickname);
    setIsCopied(true);
  };

  const handleFocusColorChange = (formMainDiv, autocompleteListDiv, nicknameSubmit) => {
    formMainDiv.style.backgroundColor = '#394f8a';
    autocompleteListDiv.style.backgroundColor = '#394f8a';
    nicknameSubmit.style.border = '1px solid rgba(255, 255, 255, 0.5)';
  };

  const handleUnfocusColorChange = (formMainDiv, autocompleteListDiv, nicknameSubmit) => {
    formMainDiv.style.backgroundColor = '#f0f2f5';
    autocompleteListDiv.style.backgroundColor = '#f0f2f5';
    nicknameSubmit.style.border = '1px solid #4a5fc1';
  };

  useEffect(() => {
    const formMainDiv = document.getElementById('formMainDiv');
    const nicknameInput = document.getElementById('nicknameInput');
    const nicknameSubmit = document.getElementById('nicknameSubmit');
    const autocompleteListDiv = document.getElementById('autocompleteListDiv');

    document.addEventListener('click', (e) => {
      if (!(e.target.id === 'nicknameInput')) {
        dispatch(clearAutocompleteNicknameList());
        handleUnfocusColorChange(formMainDiv, autocompleteListDiv, nicknameSubmit);
      }
    });
    nicknameInput.addEventListener('mousedown', () => handleFocusColorChange(formMainDiv, autocompleteListDiv, nicknameSubmit));
    nicknameInput.addEventListener('input', () => {
      dispatch(fetchAutocompleteList(nicknameInput.value));
      setNickname(nicknameInput.value);
      handleFocusColorChange(formMainDiv, autocompleteListDiv, nicknameSubmit);
    });
  }, []);

  return (
    <div>
      {isCopied
        ? (
          <p
            id="nicknameCopiedDiv"
            className="nicknameCopiedDiv"
          >
            <strong>
              Nickname copied!
            </strong>
          </p>
        )
        : null}
      <NicknameForm
        onSubmit={handleSubmit}
      />
      <AutocompleteList
        setIsCopied={setIsCopied}
        changeInputValue={changeInputValue}
      />
    </div>
  );
}

export default NicknamePanel;
