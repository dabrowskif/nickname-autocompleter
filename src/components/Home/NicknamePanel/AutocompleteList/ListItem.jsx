import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function ListItem({
  id, value, changeInputValue, isClickable, setIsCopied,
}) {
  return (
    <div
      id={`autocompleteListDivItem-${id}`}
      className="autocompleteListDivItem"
      role="button"
      tabIndex={0}
      onClick={() => (isClickable ? (setIsCopied(true), navigator.clipboard.writeText(value), changeInputValue(value)) : null)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && isClickable) {
          changeInputValue(value);
          document.getElementById(`autocompleteListDivItem-${id}`).click();
          navigator.clipboard.writeText(value);
          setIsCopied(true);
        }
      }}
    >
      {value}
    </div>
  );
}

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  changeInputValue: PropTypes.func.isRequired,
  isClickable: PropTypes.bool.isRequired,
  setIsCopied: PropTypes.func.isRequired,
};

export default ListItem;
