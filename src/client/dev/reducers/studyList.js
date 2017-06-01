function studyList(state = [], action) {
  switch (action.type) {
    case 'UPDATE_STUDIES':
      return { ...state, studies: action.studies };
    default:
  }
  return state;
}

export default studyList;
