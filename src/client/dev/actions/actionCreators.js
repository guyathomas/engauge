// Watch & review shared

// Watch
export function nextClickgame(currentGame) {
  console.log('Next nextClickgame ran', currentGame);
  return {
    type: 'NEXT_CLICKGAME',
    currentGame,
  };
}

export function toggleTraining() {
  return {
    type: 'TOGGLE_TRAINING',
  };
}

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

// Sessions
export function updateSessions() {
  return {
    type: 'UPDATE_SESSIONS',
  };
}
