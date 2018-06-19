export const postGuess = (history, stepNumber) => {
  return {
    type: "POST_GUESS",
    history,
    stepNumber
  }
};

export const increment = () => {
  return {
    type: "INCREMENT"
  }
};

export const decrement = () => {
  return {
    type: "DECREMENT"
  }
};