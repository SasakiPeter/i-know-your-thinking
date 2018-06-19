const postReducer = (state = [], action) => {
  switch (action.type) {
    case "POST_NUMBER":
      return [...state, action.number]
    default:
      return state
  }
};

export default postReducer;