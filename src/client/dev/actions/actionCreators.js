// Watch & review shared

// Watch
export function addSessionPoint(x, y, time) {
  return {
    type: 'ADD_SESSION_POINT',
    x,
    y,
    time,
  };
}

export function clearSession() {
  return {
    type: 'CLEAR_SESSION',
  };
}

export function toggleTraining() {
  return {
    type: 'TOGGLE_TRAINING',
  };
}

export function nextClickgame(currentGame) {
  return {
    type: 'NEXT_CLICKGAME',
    currentGame,
  };
}

// Review
export function renderHeatmap(sessionIndex) {
  return {
    type: 'RENDER_HEATMAP',
    sessionIndex,
  };
}

export function removeHeatmap() {
  return {
    type: 'REMOVE_HEATMAP',
  };
}

