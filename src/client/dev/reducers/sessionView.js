function sessionView(state = [], action) {
  switch (action.type) {
    case 'UPDATE_ACTIVE_TAB':
      return { ...state, activeTab: action.newIndex };
    case 'CREATE_HEATMAP':
      return { ...state, heatmap: action.heatmap };
    case 'RENDER_HEATMAP_DATA':
      const renderedMap = state.heatmap.setData(action.data);
      return { ...state, heatmap: renderedMap };
    case 'REMOVE_HEATMAP':
      return state;
    case 'TOGGLE_SESSION':
      const index = action.index;
      const newStatus = !(state.selectedSessions[index]);
      const newSelectedObj = { ...state.selectedSessions };
      newSelectedObj[index] = newStatus;
      console.log('The new selection', { ...state, selectedSessions: newSelectedObj });
      return { ...state, selectedSessions: newSelectedObj };
    case 'RESET_SESSION_SELECTION':
      return { ...state, selectedSessions: {} };
    default:
  }
  return state;
}

export default sessionView;
