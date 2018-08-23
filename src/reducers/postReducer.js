const initialState = {
  history: [{ counts: [null, null, null], id: -1, eat: -1, bite: -1 }],
  completed: false
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_GUESS":
      return {
        ...state,
        ...action
      }
    case "COMPLETED":
      return {
        ...state,
        ...action
      }
    // 上の記述と等価？
    // case "COMPLETED":
    //   return Object.assign({}, state, action)
    default:
      return state
  }
};

export default postReducer;