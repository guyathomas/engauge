// Watch
export function nextClickgame() {
  return {
    type: 'NEXT_CLICKGAME',
  };
}

export function toggleTraining() {
  return {
    type: 'TOGGLE_TRAINING',
  };
}

export function setWindowSize( size ) {
  return {
    type: 'SET_WINDOW_SIZE',
    size,
  };
}

export function addSessionPoint( x, y, time ) {
  return {
    type: 'ADD_SESSION_POINT',
    x,
    y,
    time,
  };
}

export function updateWatchStudy( study ) {
  return {
    type: 'UPDATE_WATCH_STUDY',
    study,
  };
}

export function clearSession() {
  return {
    type: 'CLEAR_SESSION',
  };
}

export function setMetaData( startTime ) {
  return {
    type: 'SET_META_DATA',
    startTime,
  };
}

// Sessions (haven't got any yet)
export function updateSessions() {
  return {
    type: 'NO_CASE',
  };
}

// ===========Sessions View=============

export function toggleSession( index, shortCode ) {
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

export function updateActiveTab( newIndex ) {
  return {
    type: 'UPDATE_ACTIVE_TAB',
    newIndex,
  };
}

export function createHeatmap( heatmap ) {
  return {
    type: 'CREATE_HEATMAP',
    heatmap,
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

export function addHeatData( heatData ) {
  return {
    type: 'ADD_HEAT_DATA',
    heatData,
  };
}

// Studylist
export function updateStudies( studies ) {
  return {
    type: 'UPDATE_STUDIES',
    studies,
  };
}

export function selectStudy( shortCode ) {
  return {
    type: 'SELECT_STUDY',
    shortCode,
  };
}
