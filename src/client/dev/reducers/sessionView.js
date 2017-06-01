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
    default:
  }
  return state;
}

export default sessionView;
