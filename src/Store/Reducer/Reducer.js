import TakeTeamName, { TAKE_TEAM_NAME } from "../Action";
const initialState = {
  takeTeamName: {},
};

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case TAKE_TEAM_NAME:
      return {
        ...state,
        takeTeamName: action.payload,
      };
    default:
      return state;
  }
};
export default Reducers;
