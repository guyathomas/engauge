import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';

// Import css
// import css from './styles/style.styl';

// Import Components
import App from './components/App';
import Watch from './components/Watch';
import Dash from './components/Dash';
import Summary from './components/Summary';
import HeatMaps from './components/Heatmaps';
import Recordings from './components/Recordings';
import WatchDetails from './components/WatchDetails';
import StudyOptions from './components/StudyOptions';
import NotFound from './components/NotFound';

import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="/watch/:shortCode" component={Watch} />
        <Route path="/dash/:shortCode" component={Dash}>
          <Route path="/dash/:shortCode/summary" component={Summary} />
          <Route path="/dash/:shortCode/heatmaps" component={HeatMaps} />
          <Route path="/dash/:shortCode/recordings" component={Recordings} />
          <Route path="/dash/:shortCode/watchdetails" component={WatchDetails} />
          <Route path="/dash/:shortCode/studyoptions" component={StudyOptions} />
        </Route>
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>
);

render(router, document.getElementById('app'));

// const router = (
//   <Provider store={store}>
//     <Router history={history}>
//       <Route path="/" component={App}>
//         <Route path="/watch/:shortCode" component={Watch} />
//         <Route path="/watch" component={WatchList} />
//         <Route path="/review" component={ReviewList} />
//         <Route path="/review/:shortCode" component={ReviewSidebar} >
//           <Route path="/review/:shortCode/:sessionID" component={Review} />
//         </Route>
//       </Route>
//       <Route path="*" component={NotFound} />
//     </Router>
//   </Provider>
// );