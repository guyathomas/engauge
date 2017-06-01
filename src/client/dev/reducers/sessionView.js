function sessionView(state = [], action) {
  switch (action.type) {
    case 'UPDATE_ACTIVE_TAB':
      return { ...state, activeTab: action.newIndex };
    case 'UPDATE_HEATMAP':
      return state;
    case 'REMOVE_HEATMAP':
      return state;
    default:
  }
  return state;
}

export default sessionView;
