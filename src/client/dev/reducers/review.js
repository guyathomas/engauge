// function postComments(state = [], action) {

// }

function review(state = [], action) {
  switch (action.type) {
    case 'ADD_SESSION_POINT':
      console.log(1);
    case 'CLEAR_SESSION':
      console.log(2);
    case 'TOGGLE_TRAINING':
      console.log(3);
    case 'NEXT_CLICKGAME':
      console.log(4);
    default:
      // console.log('In Review reducer');
  }
  return state;
}

export default review;
