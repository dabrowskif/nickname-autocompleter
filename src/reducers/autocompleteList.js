import {
  CLEAR, END_LOADING, REPLACE, START_LOADING,
} from '../constants/constants';

// eslint-disable-next-line default-param-last
const autocompleteListReducer = (state = { autocompleteList: [], isLoading: false, wasFetched: false }, action) => {
  switch (action.type) {
    case REPLACE:
      return { ...state, autocompleteList: action?.payload, wasFetched: true };
    case CLEAR:
      return { ...state, autocompleteList: [], wasFetched: false };
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default autocompleteListReducer;
