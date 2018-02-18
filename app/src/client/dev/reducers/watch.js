function watch( state = {}, action ) {
  let newState;
  switch ( action.type ) {
    case 'ADD_SESSION_POINT':
      const { x, y, time } = action;
      const newSessionData = [ ...state.newSession, { x, y, time }];
      newState = { ...state };
      newState.newSession = newSessionData;
      return newState;
    case 'SET_META_DATA':
      const { screenSize, startTime } = action;
      return { ...state, metaData: { screenSize, startTime } };
    case 'CLEAR_SESSION':
    case 'NEXT_CLICKGAME':
      newState = { ...state };
      newState.game.currGame = state.game.currGame + 1;
      newState.game.loc = { leftPerc: Math.random(), topPerc: Math.random() };
      return newState;
    case 'UPDATE_WATCH_STUDY':
      return { ...state, activeStudy: action.study };
    default:
  }
  return state;
}

export default watch;
