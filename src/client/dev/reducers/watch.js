// function postComments(state = [], action) {

// }

function watch(state = [], action) {
  // console.log('The state in reducer', state)
  // console.log('The action',  action)
  switch (action.type) {
    // case 'ADD_COMMENT':
    // case 'REMOVE_COMMENT':
    case 'ADD_SESSION_POINT':
      console.log(1);
    case 'CLEAR_SESSION':
      console.log(2);
    case 'TOGGLE_TRAINING':
      console.log(3);
    case 'NEXT_CLICKGAME':
      console.log(4);
    default:
      // console.log('In Watch reducer');
      // return state;
  }
  return state;
}

export default watch;
