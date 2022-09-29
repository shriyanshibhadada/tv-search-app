const showReducer = (state = [], action) => {
  // console.log(action.payload);
  switch (action.type) {
    case "UPDATE":
      return action.payload;
    default:
      return state;
  }
};

export default showReducer;
