import actionTypes from "../../actions/types";
import phoneList from "../phoneList";

const mockPhones = [
  { id: 1, manufacturer: "Google", model: "Pixel 3" },
  { id: 2, manufacturer: "Apple", model: "iPhone 3" }
];

describe("phoneList", () => {
  describe("PHONELIST.FETCH_REQUEST", () => {
    it("Should set the isFetching - flag and reset error", () => {
      const initialState = {
        isFetching: null,
        error: new Error("Test"),
        selected: null,
        phones: []
      };
      const action = { type: actionTypes.PHONELIST.FETCH_REQUEST };
      const result = phoneList(initialState, action);

      expect(result.isFetching).toBe(true);
      expect(result.error).toBe(null);
    });
  });

  describe("PHONELIST.FETCH_SUCCESS", () => {
    it("Should reset the isFetching - flag and set phones from the response", () => {
      const initialState = {
        isFetching: null,
        error: null,
        selected: null,
        phones: []
      };
      const action = {
        type: actionTypes.PHONELIST.FETCH_SUCCESS,
        data: mockPhones
      };
      const result = phoneList(initialState, action);

      expect(result.isFetching).toBe(false);
      expect(result.phones).toBe(mockPhones);
    });
  });

  describe("PHONELIST.FETCH_FAILURE", () => {
    it("Should reset the isFetching - flag and set the error", () => {
      const mockError = new Error("So bad");
      const initialState = {
        isFetching: null,
        error: null,
        selected: null,
        phones: []
      };
      const action = {
        type: actionTypes.PHONELIST.FETCH_FAILURE,
        error: mockError
      };
      const result = phoneList(initialState, action);

      expect(result.isFetching).toBe(false);
      expect(result.error).toBe(mockError);
    });
  });

  describe("PHONELIST.SELECT_FOR_DETAILS", () => {
    it("Should set the selected phone from the action.selected", () => {
      const selected = mockPhones[1];
      const initialState = {
        isFetching: null,
        error: null,
        selected: null,
        phones: []
      };
      const action = {
        type: actionTypes.PHONELIST.SELECT_FOR_DETAILS,
        phone: selected
      };

      const result = phoneList(initialState, action);

      expect(result.selected).toBe(mockPhones[1]);
    });
  });

  describe("PHONELIST.RESET_DETAILS", () => {
    it("Should reset the selected phone", () => {
      const initialState = {
        isFetching: null,
        error: null,
        selected: mockPhones[1],
        phones: []
      };
      const action = {
        type: actionTypes.PHONELIST.RESET_DETAILS
      };

      const result = phoneList(initialState, action);

      expect(result.selected).toBe(null);
    });
  });
});
