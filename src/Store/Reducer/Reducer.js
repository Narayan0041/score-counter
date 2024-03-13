import {
  CURRENT_RUN_RATE,
  NO_BALL,
  NO_OF_BALLS,
  RUNS,
  RUNS_SCORE_BOARD,
  SCORE_ADD_CONTAINER,
  SECOND_INNING,
  SECOND_INN_CURRENT_RUN_RATE,
  SECOND_INN_NO_BALL,
  SECOND_INN_NO_OF_BALLS,
  SECOND_INN_RUNS,
  SECOND_INN_RUNS_SCORE_BOARD,
  SECOND_INN_WICKET,
  SECOND_INN_WIDE_BALL,
  SELECT_HOW_MANY_OVER,
  TAKE_TEAM_NAME,
  TEAM_TOSS_LOSS,
  TEAM_TOSS_WIN,
  WHAT_YOU_WANT_TO_DO,
  WICKET,
  WIDE_BALL,
} from "../Action";
const initialState = {
  takeTeamName: {},
  teamTossWin: "",
  teamTossLoss: "",
  whatYouChoose: "",
  selectTheOver: "",
  totalRuns: 0,
  noOfBalls: 0,
  currentRunRate: 0,
  noOfWideBall: 0,
  noOfNoBall: 0,
  runScoreBoard: [],
  wicketFall: 0,

  secondInning:false,
  secondInnTotalRuns: 0,
  secondInnNoOfBalls: 0,
  secondInnCurrentRunRate: 0,
  secondInnNoOfWideBall: 0,
  secondInnNoOfNoBall: 0,
  secondInnrunScoreBoard: [],
  secondInnWicketFall: 0,
  scoreAddContainer:undefined,
};

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case TAKE_TEAM_NAME:
      return {
        ...state,
        takeTeamName: action.payload,
      };
    case TEAM_TOSS_WIN:
      return {
        ...state,
        teamTossWin: action.payload,
      };
      case TEAM_TOSS_LOSS:
        return{
          ...state,
          teamTossLoss:action.payload,
        }
    case WHAT_YOU_WANT_TO_DO:
      return {
        ...state,
        whatYouChoose: action.payload,
      };
    case SELECT_HOW_MANY_OVER:
      return {
        ...state,
        selectTheOver: action.payload,
      };
    case RUNS:
      return {
        ...state,
        totalRuns: action.payload,
      };
    case NO_OF_BALLS:
      return {
        ...state,
        noOfBalls: action.payload,
      };
    case CURRENT_RUN_RATE:
      return {
        ...state,
        currentRunRate: action.payload,
      };
    case WIDE_BALL:
      return {
        ...state,
        noOfWideBall: action.payload,
      };
    case NO_BALL:
      return {
        ...state,
        noOfNoBall: action.payload,
      };
    case RUNS_SCORE_BOARD:
      return {
        ...state,
        runScoreBoard: [...state.runScoreBoard, action.payload],
      };
    case WICKET:
      return {
        ...state,
        wicketFall: action.payload,
      };


    case SECOND_INNING:
      return {
        ...state,
        secondInning: action.payload,
      };
    case SECOND_INN_RUNS:
      return {
        ...state,
        secondInnTotalRuns: action.payload,
      };
    case SECOND_INN_NO_OF_BALLS:
      return {
        ...state,
        secondInnNoOfBalls: action.payload,
      };
    case SECOND_INN_CURRENT_RUN_RATE:
      return {
        ...state,
        secondInnCurrentRunRate: action.payload,
      };
    case SECOND_INN_WIDE_BALL:
      return {
        ...state,
        secondInnNoOfWideBall: action.payload,
      };
    case SECOND_INN_NO_BALL:
      return {
        ...state,
        secondInnNoOfNoBall: action.payload,
      };
    case SECOND_INN_RUNS_SCORE_BOARD:
      return {
        ...state,
        secondInnrunScoreBoard: [
          ...state.secondInnrunScoreBoard,
          action.payload,
        ],
      };
    case SECOND_INN_WICKET:
      return {
        ...state,
        secondInnWicketFall: action.payload,
      };

      case SCORE_ADD_CONTAINER:
        return{
          ...state,
          scoreAddContainer:action.payload
        }

    default:
      return state;
  }
};

export default Reducers;
