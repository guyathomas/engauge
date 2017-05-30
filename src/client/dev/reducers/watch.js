function watch(state = {}, action) {
  // console.log('The state in reducer', state)
  // console.log('The action',  action)
  let newState;
  switch (action.type) {
    // case 'ADD_COMMENT':
    // case 'REMOVE_COMMENT':
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
      // console.log('In Watch reducer');
      // return state;
  }
  return state;
}

export default watch;
