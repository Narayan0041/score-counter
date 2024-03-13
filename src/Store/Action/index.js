export const TAKE_TEAM_NAME = "TAKE_TEAM_NAME";
export const TEAM_TOSS_WIN = "TEAM_TOSS_WIN";
export const TEAM_TOSS_LOSS ="TEAM_TOSS_LOSS";
export const WHAT_YOU_WANT_TO_DO = "WHAT_YOU_WANT_TO_DO";
export const SELECT_HOW_MANY_OVER ="SELECT_HOW_MANY_OVER"
export const RUNS ="RUNS"
export const NO_OF_BALLS ="NO_OF_BALLS"
export const CURRENT_RUN_RATE ="CURRENT_RUN_RATE"
export const WIDE_BALL ="WIDE_BALL"
export const NO_BALL ="NO_BALL"
export const WICKET ="WICKET"

// for Second inning 
export const SECOND_INNING ="SECOND_INNING"
export const RUNS_SCORE_BOARD ="RUNS_SCORE_BOARD"
export const SECOND_INN_RUNS ="SECOND_INN_RUNS"
export const SECOND_INN_NO_OF_BALLS ="SECOND_INN_NO_OF_BALLS"
export const SECOND_INN_CURRENT_RUN_RATE ="SECOND_INN_CURRENT_RUN_RATE"
export const SECOND_INN_WIDE_BALL ="SECOND_INN_WIDE_BALL"
export const SECOND_INN_NO_BALL ="SECOND_INN_NO_BALL"
export const SECOND_INN_RUNS_SCORE_BOARD ="SECOND_INN_RUNS_SCORE_BOARD"
export const SECOND_INN_WICKET ="SECOND_INN_WICKET"
export const SCORE_ADD_CONTAINER ="SCORE_ADD_CONTAINER"
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

export const selectTheOver =(detail)=>{
    return{
        type:SELECT_HOW_MANY_OVER,
        payload:detail,
    }
}

export const totalRun =(detail)=>{
    return{
        type:RUNS,
        payload:detail,
    }
}
export const totalNoOFBalls =(detail)=>{
    return{
        type:NO_OF_BALLS,
        payload:detail,
    }
}
export const currentRunRate =(detail)=>{
    return{
        type:CURRENT_RUN_RATE,
        payload:detail,
    }
}
export const noOfWideBall =(detail)=>{
    return{
        type:WIDE_BALL,
        payload:detail,
    }
}
export const noOfNOBall =(detail)=>{
    return{
        type:NO_BALL,
        payload:detail,
    }
}

export const runsScoreBoard =(detail)=>{
    return{
        type:RUNS_SCORE_BOARD,
        payload:detail
    }
}
export const wicketFall =(detail)=>{
    return{
        type:WICKET,
        payload:detail
    }
}


// Second inning start


export const secondInning =(detail)=>{
    return{
        type:SECOND_INNING,
        payload:detail,
    }
}
export const secondInnTotalRun =(detail)=>{
    return{
        type:SECOND_INN_RUNS,
        payload:detail,
    }
}
export const secondInnTotalNoOFBalls =(detail)=>{
    return{
        type:SECOND_INN_NO_OF_BALLS,
        payload:detail,
    }
}
export const secondInnCurrentRunRate =(detail)=>{
    return{
        type:SECOND_INN_CURRENT_RUN_RATE,
        payload:detail,
    }
}
export const secondInnNoOfWideBall =(detail)=>{
    return{
        type:SECOND_INN_WIDE_BALL,
        payload:detail,
    }
}
export const secondInnNoOfNOBall =(detail)=>{
    return{
        type:SECOND_INN_NO_BALL,
        payload:detail,
    }
}

export const secondInnRunsScoreBoard =(detail)=>{
    return{
        type:SECOND_INN_RUNS_SCORE_BOARD,
        payload:detail
    }
}
export const secondInnWicketFall =(detail)=>{
    return{
        type:SECOND_INN_WICKET,
        payload:detail
    }
}
export const scoreAddContainer =(detail)=>{
    return{
        type:SCORE_ADD_CONTAINER,
        payload:detail
    }
}
