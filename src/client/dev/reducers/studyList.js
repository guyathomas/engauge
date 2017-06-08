function studyList(state = [], action) {
  switch (action.type) {
    case 'UPDATE_STUDIES':
      console.log('The state after getting the studies request', { ...state, studies: action.studies });
      return { ...state, studies: action.studies };
    case 'SELECT_STUDY':
      console.log('Now the study has been selected', { ...state, selectedStudy: action.shortCode });
      return { ...state, selectedStudy: action.shortCode };
    default:
  }
  return state;
}

export default studyList;
