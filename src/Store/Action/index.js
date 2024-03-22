export const TAKE_TEAM_NAME = "TAKE_TEAM_NAME";
export const TEAM_TOSS_WIN = "TEAM_TOSS_WIN";
export const TEAM_TOSS_LOSS = "TEAM_TOSS_LOSS";
export const WHAT_YOU_WANT_TO_DO = "WHAT_YOU_WANT_TO_DO";
export const SELECT_HOW_MANY_OVER = "SELECT_HOW_MANY_OVER";
export const RUNS = "RUNS";
export const NO_OF_BALLS = "NO_OF_BALLS";
export const CURRENT_RUN_RATE = "CURRENT_RUN_RATE";
export const WIDE_BALL = "WIDE_BALL";
export const NO_BALL = "NO_BALL";
export const WICKET = "WICKET";
export const NO_OF_OTHER_RUNS = "NO_OF_OTHER_RUNS";
export const NO_OF_FOUR = "NO_OF_FOUR";
export const NO_OF_SIX = "NO_OF_SIX";
export const NO_OF_BYE = "NO_OF_BYE";
export const RUN_RATE_CHART ="RUN_RATE_CHART"
export const WIDE_BALL_CONTAINER ="WIDE_BALL_CONTAINER"
export const NO_BALL_CONTAINER = "NO_BALL_CONTAINER";
export const LEG_BY_CONATAINER ="LEG_BY_CONATAINER"

// for Second inning
export const SECOND_INNING = "SECOND_INNING";
export const RUNS_SCORE_BOARD = "RUNS_SCORE_BOARD";
export const SECOND_INN_RUNS = "SECOND_INN_RUNS";
export const SECOND_INN_NO_OF_BALLS = "SECOND_INN_NO_OF_BALLS";
export const SECOND_INN_CURRENT_RUN_RATE = "SECOND_INN_CURRENT_RUN_RATE";
export const SECOND_INN_WIDE_BALL = "SECOND_INN_WIDE_BALL";
export const SECOND_INN_NO_BALL = "SECOND_INN_NO_BALL";
export const SECOND_INN_RUNS_SCORE_BOARD = "SECOND_INN_RUNS_SCORE_BOARD";
export const SECOND_INN_WICKET = "SECOND_INN_WICKET";
export const SCORE_ADD_GET_START_BUTTON = "SCORE_ADD_GET_START_BUTTON";
export const MODAL_BOX = "MODAL_BOX";
export const SET_PLAYERS_COUNT = "SET_PLAYERS_COUNT";
export const WICKETFALL_WITH_RUN = "WICKETFALL_WITH_RUN";
export const SECOND_INN_NO_OF_OTHER_RUNS = "SECOND_INN_NO_OF_OTHER_RUNS";
export const SECOND_INN_NO_OF_FOUR = "SECOND_INN_NO_OF_FOUR";
export const SECOND_INN_NO_OF_SIX = "SECOND_INN_NO_OF_SIX";
export const SECOND_INN_WICKETFALL_WITH_RUN = "SECOND_INN_WICKETFALL_WITH_RUN";
export const SECOND_INN_NO_OF_BYE = "SECOND_INN_NO_OF_BYE";
export const SECOND_INNING_RUN_RATE_CHART ="SECOND_INNING_RUN_RATE_CHART"
export const SECOND_INNING_WIDE_BALL_CONTAINER ="SECOND_INNING_WIDE_BALL_CONTAINER"
export const SECOND_INNING_NO_BALL_CONTAINER = "SECOND_INNING_NO_BALL_CONTAINER";
export const SECOND_INNING_LEG_BY_CONATAINER ="SECOND_INNING_LEG_BY_CONATAINER"
// Action Creators
export const TakeTeamName = (detail) => ({
  type: TAKE_TEAM_NAME,
  payload: detail,
});

export const tossWin = (detail) => ({
  type: TEAM_TOSS_WIN,
  payload: detail,
});

export const tossLoss = (detail) => ({
  type: TEAM_TOSS_LOSS,
  payload: detail,
});
export const whatYouChoose = (detail) => ({
  type: WHAT_YOU_WANT_TO_DO,
  payload: detail,
});

export const selectTheOver = (detail) => {
  return {
    type: SELECT_HOW_MANY_OVER,
    payload: detail,
  };
};

export const totalRun = (detail) => {
  return {
    type: RUNS,
    payload: detail,
  };
};
export const totalNoOFBalls = (detail) => {
  return {
    type: NO_OF_BALLS,
    payload: detail,
  };
};
export const currentRunRate = (detail) => {
  return {
    type: CURRENT_RUN_RATE,
    payload: detail,
  };
};
export const noOfWideBall = (detail) => {
  return {
    type: WIDE_BALL,
    payload: detail,
  };
};
export const noOfNOBall = (detail) => {
  return {
    type: NO_BALL,
    payload: detail,
  };
};
export const noOfByes = (detail) => {
  return {
    type: NO_OF_BYE,
    payload: detail,
  };
};

export const runsScoreBoard = (detail) => {
  return {
    type: RUNS_SCORE_BOARD,
    payload: detail,
  };
};
export const runRateChart =(detail)=>{
  return{
    type:RUN_RATE_CHART,
    payload:detail
  }
}
export const wicketFall = (detail) => {
  return {
    type: WICKET,
    payload: detail,
  };
};
export const noOfOtherRuns = (detail) => {
  return {
    type: NO_OF_OTHER_RUNS,
    payload: detail,
  };
};
export const noOfFour = (detail) => {
  return {
    type: NO_OF_FOUR,
    payload: detail,
  };
};
export const noOfSix = (detail) => {
  return {
    type: NO_OF_SIX,
    payload: detail,
  };
};
export const wideBallContainer =(detail)=>{
  return{
    type:WIDE_BALL_CONTAINER,
    payload:detail,
  }
}
export const noBallContainer =(detail)=>{
  return{
    type:NO_BALL_CONTAINER,
    payload:detail,
  }
}
export const legByContainer =(detail)=>{
  return{
    type:LEG_BY_CONATAINER,
    payload:detail,
  }
}

// Second inning start

export const secondInning = (detail) => {
  return {
    type: SECOND_INNING,
    payload: detail,
  };
};
export const secondInnTotalRun = (detail) => {
  return {
    type: SECOND_INN_RUNS,
    payload: detail,
  };
};
export const secondInnTotalNoOFBalls = (detail) => {
  return {
    type: SECOND_INN_NO_OF_BALLS,
    payload: detail,
  };
};
export const secondInnCurrentRunRate = (detail) => {
  return {
    type: SECOND_INN_CURRENT_RUN_RATE,
    payload: detail,
  };
};
export const secondInnNoOfWideBall = (detail) => {
  return {
    type: SECOND_INN_WIDE_BALL,
    payload: detail,
  };
};
export const secondInnNoOfNOBall = (detail) => {
  return {
    type: SECOND_INN_NO_BALL,
    payload: detail,
  };
};

export const secondInnRunsScoreBoard = (detail) => {
  return {
    type: SECOND_INN_RUNS_SCORE_BOARD,
    payload: detail,
  };
};
export const secondInningRunRateChart =(detail)=>{
  return{
    type:SECOND_INNING_RUN_RATE_CHART,
    payload:detail
  }
}
export const secondInnWicketFall = (detail) => {
  return {
    type: SECOND_INN_WICKET,
    payload: detail,
  };
};
export const secondInnNoOFOtherRun = (detail) => {
  return {
    type: SECOND_INN_NO_OF_OTHER_RUNS,
    payload: detail,
  };
};
export const secondInnNoOfFour = (detail) => {
  return {
    type: SECOND_INN_NO_OF_FOUR,
    payload: detail,
  };
};
export const secondInnNoOfSix = (detail) => {
  return {
    type: SECOND_INN_NO_OF_SIX,
    payload: detail,
  };
};
export const getStartButton = (detail) => {
  return {
    type: SCORE_ADD_GET_START_BUTTON,
    payload: detail,
  };
};

export const modalBox = (detail) => {
  return {
    type: MODAL_BOX,
    payload: detail,
  };
};
export const noOfPlayer = (detail) => {
  return {
    type: SET_PLAYERS_COUNT,
    payload: detail,
  };
};

export const wicketFallWithRun = (detail) => {
  return {
    type: WICKETFALL_WITH_RUN,
    payload: detail,
  };
};

export const secondInnWicketFallWithRun = (detail) => {
  return {
    type: SECOND_INN_WICKETFALL_WITH_RUN,
    payload: detail,
  };
};

export const secondInnNoOfByes =(detail)=>{
  return{
    type:SECOND_INN_NO_OF_BYE,
    payload:detail
  }
}
export const secondInningWideBallContainer =(detail)=>{
  return{
    type:SECOND_INNING_WIDE_BALL_CONTAINER,
    payload:detail,
  }
}
export const secondInningNoBallContainer =(detail)=>{
  return{
    type:SECOND_INNING_NO_BALL_CONTAINER,
    payload:detail,
  }
}
export const secondInningLegByContainer =(detail)=>{
  return{
    type:SECOND_INNING_LEG_BY_CONATAINER,
    payload:detail,
  }
}