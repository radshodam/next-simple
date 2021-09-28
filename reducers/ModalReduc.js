const ModalReduce = (state = 0, action) => {
    switch (action.type) {
      case "DataModal":
        return state + 1;
      default:
        return state;
    }
  };
  export default ModalReduce