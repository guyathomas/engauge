// Watch
export function nextClickgame(currentGame) {
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


// Sessions (haven't got any yet)
export function updateSessions() {
  return {
    type: 'NO_CASE',
  };
}

// ===========Sessions View=============

export function toggleSession(index, shortCode) {
  return {
    type: 'TOGGLE_SESSION',
    index,
    shortCode,
  };
}

export function resetSessionSelection() {
  return {
    type: 'RESET_SESSION_SELECTION',
  };
}

export function updateActiveTab(newIndex) {
  return {
    type: 'UPDATE_ACTIVE_TAB',
    newIndex,
  };
}

export function createHeatmap(heatmap) {
  return {
    type: 'CREATE_HEATMAP',
    heatmap,
  };
}

export function renderHeatmapData(data) {
  return {
    type: 'RENDER_HEATMAP_DATA',
    data,
  };
}

export function clearHeatmap() {
  return {
    type: 'CLEAR_HEATMAP',
  };
}

export function removeHeatmap() {
  return {
    type: 'REMOVE_HEATMAP',
  };
}


// Studylist
export function updateStudies(studies) {
  return {
    type: 'UPDATE_STUDIES',
    studies,
  };
}

export function selectStudy(shortCode) {
  return {
    type: 'SELECT_STUDY',
    shortCode,
  };
}