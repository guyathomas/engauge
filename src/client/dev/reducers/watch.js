function watch(state = {}, action) {
  let newState;
  switch (action.type) {
    case 'ADD_SESSION_POINT':
      const { x, y, time } = action;
      const newSessionData = [...state.newSession, { x, y, time }];
      newState = { ...state };
      newState.newSession = newSessionData;
      return newState;
    case 'CLEAR_SESSION':
    case 'NEXT_CLICKGAME':
      newState = { ...state };
      newState.game.currGame = newState.game.currGame + 1;
      return newState;
    case 'UPDATE_WATCH_STUDY':
      return { ...state, activeStudy: action.study };
    default:
  }
  return state;
}

export default watch;
