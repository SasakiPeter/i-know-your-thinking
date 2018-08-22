export const postGuess = (history, stepNumber) => {
  return {
    type: "POST_GUESS",
    history: history,
    stepNumber: stepNumber
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

export const completed = () => {
  return {
    type: "COMPLETED"
  }
}