const initState = [];
const postReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;

    default:
      return state;
  }
};

export default postReducer;
