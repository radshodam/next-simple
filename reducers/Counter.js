const CounterReducer = (state = 0, action) => {
  switch (action.type) {
    case "Increament":
      return state + 1;
    default:
      return state;
  }
};
export default CounterReducer