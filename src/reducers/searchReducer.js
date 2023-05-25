const initialState = {
  searchLocation: "",
  numberOfGuests: 1,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SEARCH_LOCATION":
      return {
        ...state,
        searchLocation: action.payload,
      };
    case "UPDATE_NUMBER_OF_GUESTS":
      return {
        ...state,
        numberOfGuests: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
