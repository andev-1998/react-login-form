const initialState = {
    username: "",
    fullname: "",
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          username: action.payload.username,
          fullname: action.payload.fullname,
        };
      case "CLEAR_USER":
        return {
          ...state,
          username: "",
          fullname: "",
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  