function studyList(state = [], action) {
  switch (action.type) {
    case 'UPDATE_STUDIES':
      return { ...state, studies: action.studies };
    case 'SELECT_STUDY':
      return { ...state, selectedStudy: action.shortCode };
    default:
  }
  return state;
}

export default studyList;
