function watch(state = {}, action) {
  let newState;
  switch (action.type) {
    case 'ADD_SESSION_POINT':
      const { x, y, time } = action;
      const newSessionData = [...state.activeSession, { x, y, time }];
      newState = { ...state };
      newState.activeSession = newSessionData;
      return newState;
    case 'CLEAR_SESSION':
    case 'NEXT_CLICKGAME':
      newState = { ...state };
      newState.game.currGame = newState.game.currGame + 1;
      return newState;
    default:
  }
  return state;
}

export default watch;
