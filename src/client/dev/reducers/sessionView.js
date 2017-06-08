function sessionView(state = [], action) {
  switch (action.type) {
    case 'UPDATE_ACTIVE_TAB':
      return { ...state, activeTab: action.newIndex };
    case 'CREATE_HEATMAP':
      return { ...state, heatmap: action.heatmap };
    case 'RENDER_HEATMAP_DATA':
      state.heatmap.setData(action.data);
      return state;
    case 'REMOVE_HEATMAP':
      return { ...state, heatmap: '' };
    case 'TOGGLE_SESSION':
      const { shortCode, index } = action;
      const newSelectedSet = state.selected[shortCode] ? new Set(state.selected[shortCode]) : new Set();
      newSelectedSet.has(index) ? newSelectedSet.delete(index) : newSelectedSet.add(index);
      return { ...state, selected: { ...state.selected, [shortCode]: newSelectedSet } };
    case 'RESET_SESSION_SELECTION':
      return { ...state, selected: {} };
    default:
  }
  return state;
}

export default sessionView;
