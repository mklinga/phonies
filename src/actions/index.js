import actionTypes from "./types";

export const fetchPhones = () => ({
  type: actionTypes.PHONELIST.FETCH_REQUEST
});

export const selectPhoneForDetails = phone => ({
  type: actionTypes.PHONELIST.SELECT_FOR_DETAILS,
  phone
});

export const resetSelectedPhone = () => ({
  type: actionTypes.PHONELIST.RESET_DETAILS
});
