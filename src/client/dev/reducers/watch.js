function watch(state = [], action) {
  // console.log('The state in reducer', state)
  // console.log('The action',  action)
  let newState;
  switch (action.type) {
    // case 'ADD_COMMENT':
    // case 'REMOVE_COMMENT':
    case 'ADD_SESSION_POINT':
    case 'CLEAR_SESSION':
    case 'TOGGLE_TRAINING':
      newState = { ...state };
      // newState.game.currGame = newState.game.currGame + 1;
      return newState;
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
