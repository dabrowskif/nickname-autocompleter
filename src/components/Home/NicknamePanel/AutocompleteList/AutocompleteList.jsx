import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import ListItem from './ListItem';
import LoadingCircle from './LoadingCircle/LoadingCircle';
import './styles.css';

/* eslint-disable react/no-array-index-key */

function AutocompleteList({ setIsCopied, changeInputValue }) {
  const isListLoading = useSelector((state) => state.autocompleteList.isLoading);
  const autocompleteList = useSelector((state) => state.autocompleteList.autocompleteList);
  const wasFetched = useSelector((state) => state.autocompleteList.wasFetched);

  return (
    <div id="autocompleteMainDiv" className="autocompleteMainDiv">
      <div id="autocompleteListDiv" className="autocompleteListDiv">
        {/* eslint-disable-next-line no-nested-ternary */}
        { isListLoading
          ? (<LoadingCircle />
          )
          : autocompleteList.length === 0 && wasFetched
            ? (
              <ListItem
                key="noResultsFound"
                id={0}
                value="No results found!"
                setIsCopied={setIsCopied}
                changeInputValue={changeInputValue}
                isClickable={false}
              />
            )
            : autocompleteList?.map((item, index) => (
              <ListItem
                key={index}
                id={index}
                value={item}
                changeInputValue={changeInputValue}
                setIsCopied={setIsCopied}
                isClickable
              />
            ))}
      </div>
    </div>
  );
}

AutocompleteList.propTypes = {
  setIsCopied: PropTypes.func.isRequired,
  changeInputValue: PropTypes.func.isRequired,
};

export default AutocompleteList;
