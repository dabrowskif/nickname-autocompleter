/* eslint-disable */
import {CLEAR, END_LOADING, REPLACE, START_LOADING} from '../constants/constants';
import * as api from "../api";
import {getAutocompleteNicknameList} from "../functions/autocomplete";

export const fetchAutocompleteList = (nickname) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    if (nickname !== '') {
      const nicknameList = await api.fetchNicknameList();
      const autocompleteNicknameList = getAutocompleteNicknameList(nickname, nicknameList.data.Users);
      dispatch({ type: REPLACE, payload: autocompleteNicknameList });
    } else {
      dispatch({ type: CLEAR });
    }

    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const clearAutocompleteNicknameList = () => async (dispatch) => {
  try {
    dispatch({ type: CLEAR });
  } catch (error) {
    console.log(error);
  }
}
