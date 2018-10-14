import actionTypes from "../actions/types";

const initialState = {
  isFetching: null,
  error: null,
  selected: null,
  phones: []
};

export default function(state = initialState, action) {
  console.log(action, ""); // TODO: remove when done
  switch (action.type) {
    case actionTypes.PHONELIST.FETCH_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case actionTypes.PHONELIST.FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        phones: action.data
      };
    case actionTypes.PHONELIST.FETCH_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
        phones: []
      };
    case actionTypes.PHONELIST.SELECT_FOR_DETAILS:
      return {
        ...state,
        selected: action.phone
      };
    case actionTypes.PHONELIST.RESET_DETAILS:
      return {
        ...state,
        selected: null
      };
    default:
      return state;
  }
}
