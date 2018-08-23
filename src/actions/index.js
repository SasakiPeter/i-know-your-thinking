export const postGuess = (history) => {
  return {
    type: "POST_GUESS",
    history: history
  }
};

export const completed = () => {
  return {
    type: "COMPLETED",
    completed: true
  }
}