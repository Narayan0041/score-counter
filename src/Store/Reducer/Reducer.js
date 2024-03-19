import {
  CURRENT_RUN_RATE,
  MODAL_BOX,
  NO_BALL,
  NO_OF_BALLS,
  NO_OF_FOUR,
  NO_OF_OTHER_RUNS,
  NO_OF_SIX,
  RUNS,
  RUNS_SCORE_BOARD,
  SCORE_ADD_CONTAINER,
  SCORE_ADD_GET_START_BUTTON,
  SECOND_INNING,
  SECOND_INN_CURRENT_RUN_RATE,
  SECOND_INN_NO_BALL,
  SECOND_INN_NO_OF_BALLS,
  SECOND_INN_NO_OF_FOUR,
  SECOND_INN_NO_OF_OTHER_RUNS,
  SECOND_INN_NO_OF_SIX,
  SECOND_INN_RUNS,
  SECOND_INN_RUNS_SCORE_BOARD,
  SECOND_INN_WICKET,
  SECOND_INN_WICKETFALL_WITH_RUN,
  SECOND_INN_WIDE_BALL,
  SELECT_HOW_MANY_OVER,
  SET_PLAYERS_COUNT,
  TAKE_TEAM_NAME,
  TEAM_TOSS_LOSS,
  TEAM_TOSS_WIN,
  WHAT_YOU_WANT_TO_DO,
  WICKET,
  WICKETFALL_WITH_RUN,
  WIDE_BALL,
  wicketFallWithRun,
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
  noOfBye:0,
  runScoreBoard:[],
  wicketFall: 0,
  noOfotherRuns:0,
  noOfFour:0,
  noOfSix:0,

  secondInning: false,
  secondInnTotalRuns: 0,
  secondInnNoOfBalls: 0,
  secondInnCurrentRunRate: 0,
  secondInnNoOfWideBall: 0,
  secondInnNoOfNoBall: 0,
  secondInnNoOfBye:0,
  secondInnrunScoreBoard: [],
  secondInnWicketFall: 0,
  getStartButton: false,
  modalBox: false,
  noOfPlayer: 0,
  secondInningNoOfOtherRuns:0,
  secondInnNoOfFour:0,
  secondInnNoOfSix:0,
  wicketFallWithRun: [],
  secondInningWicketFallWithRun :[],
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
      return {
        ...state,
        teamTossLoss: action.payload,
      };
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
      case NO_OF_OTHER_RUNS:
        return{
          ...state,
          noOfotherRuns:action.payload,
        }
      case NO_OF_FOUR:
        return{
          ...state,
          noOfFour:action.payload
        }
      case NO_OF_SIX:
        return{
          ...state,
          noOfSix:action.payload
        }

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
      case SECOND_INN_NO_OF_OTHER_RUNS:
        return{
          ...state,
          secondInningNoOfOtherRuns:action.payload,
        }
      case SECOND_INN_NO_OF_FOUR:
        return{
          ...state,
          secondInnNoOfFour:action.payload
        }
      case SECOND_INN_NO_OF_SIX:
        return{
          ...state,
          secondInnNoOfSix:action.payload
        }
    case SCORE_ADD_GET_START_BUTTON:
      return {
        ...state,
        getStartButton: action.payload,
      };

    case SET_PLAYERS_COUNT:
      return {
        ...state,
        noOfPlayer: action.payload,
      };

    case MODAL_BOX:
      return {
        ...state,
        modalBox: action.payload,
      };
      case WICKETFALL_WITH_RUN:
        return {
          ...state,
          wicketFallWithRun: [...state.wicketFallWithRun, action.payload], 
        };
      case SECOND_INN_WICKETFALL_WITH_RUN:
        return {
          ...state,
          secondInningWicketFallWithRun: [...state.secondInningWicketFallWithRun, action.payload], 
        };
    default:
      return state;
  }
};

export default Reducers;
