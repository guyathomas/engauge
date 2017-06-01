import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

// import comments from './data/comments';
// import posts from './data/posts';

const defaultState = {
  accountStats: {
    expanded: true,
  },
  sessionView: {
    activeTab: 1,
    heatmap: '',
    selectedSessions: [0],
    sessions: [
      {
        id: 1,
        recording: [{ x: 913, y: 428, time: 87 }, { x: 370, y: 727, time: 110 }, { x: 862, y: 666, time: 124 }, { x: 396, y: 731, time: 137 }, { x: 453, y: 386, time: 152 }, { x: 418, y: 519, time: 170 }, { x: 567, y: 272, time: 191 }, { x: 453, y: 386, time: 203 }, { x: 662, y: 372, time: 218 }, { x: 571, y: 492, time: 236 }, { x: 317, y: 675, time: 253 }, { x: 262, y: 920, time: 269 }, { x: 47, y: 695, time: 287 }, { x: 195, y: 497, time: 303 }, { x: 379, y: 650, time: 319 }, { x: 180, y: 534, time: 338 }, { x: 477, y: 377, time: 359 }, { x: 1011, y: 138, time: 370 }, { x: 638, y: 125, time: 386 }, { x: 554, y: 520, time: 402 }, { x: 453, y: 581, time: 420 }, { x: 493, y: 334, time: 437 }, { x: 481, y: 354, time: 453 }, { x: 258, y: 479, time: 470 }, { x: 151, y: 454, time: 487 }, { x: 398, y: 446, time: 508 }, { x: 440, y: 332, time: 520 }, { x: 507, y: 381, time: 536 }, { x: 530, y: 162, time: 553 }, { x: 549, y: 116, time: 570 }, { x: 565, y: 192, time: 586 }, { x: 472, y: 266, time: 604 }, { x: 72, y: 471, time: 1943 }, { x: 570, y: 389, time: 2008 }, { x: 633, y: 436, time: 2029 }, { x: 803, y: 436, time: 2046 }, { x: 365, y: 619, time: 2065 }, { x: 601, y: 484, time: 2079 }, { x: 703, y: 535, time: 2093 }, { x: 561, y: 368, time: 2112 }, { x: 529, y: 380, time: 2136 }, { x: 696, y: 741, time: 2174 }, { x: 814, y: 742, time: 2192 }, { x: 681, y: 705, time: 2205 }, { x: 683, y: 705, time: 2221 }, { x: 799, y: 538, time: 2238 }, { x: 772, y: 559, time: 2255 }, { x: 705, y: 696, time: 2282 }, { x: 624, y: 812, time: 2295 }, { x: 664, y: 734, time: 2308 }, { x: 525, y: 840, time: 2321 }, { x: 687, y: 712, time: 2341 }, { x: 696, y: 760, time: 2355 }, { x: 629, y: 776, time: 2372 }, { x: 572, y: 795, time: 2388 }, { x: 560, y: 775, time: 2405 }, { x: 672, y: 749, time: 2425 }, { x: 672, y: 749, time: 2440 }, { x: 736, y: 711, time: 2455 }, { x: 702, y: 753, time: 2472 }, { x: 608, y: 730, time: 2488 }, { x: 608, y: 730, time: 2505 }, { x: 608, y: 730, time: 2522 }, { x: 734, y: 693, time: 2539 }, { x: 847, y: 752, time: 2555 }, { x: 834, y: 737, time: 2572 }, { x: 988, y: 476, time: 2588 }, { x: 1024, y: 658, time: 2605 }, { x: 503, y: 736, time: 2628 }, { x: 436, y: 626, time: 2641 }, { x: 593, y: 601, time: 2655 }, { x: 521, y: 538, time: 2673 }, { x: 693, y: 645, time: 2694 }, { x: 693, y: 645, time: 2707 }, { x: 740, y: 626, time: 2721 }, { x: 752, y: 304, time: 2746 }, { x: 712, y: 421, time: 2759 }, { x: 712, y: 421, time: 2772 }, { x: 576, y: 587, time: 2789 }, { x: 823, y: 130, time: 2810 }, { x: 689, y: 159, time: 2824 }, { x: 689, y: 159, time: 2839 }, { x: 726, y: 177, time: 2860 }, { x: 726, y: 177, time: 2873 }, { x: 682, y: 241, time: 2892 }, { x: 905, y: 24, time: 2913 }, { x: 837, y: 219, time: 2927 }, { x: 590, y: 461, time: 2940 }, { x: 590, y: 461, time: 2958 }, { x: 578, y: 416, time: 2973 }, { x: 504, y: 300, time: 2990 }, { x: 504, y: 300, time: 3006 }, { x: 660, y: 212, time: 3022 }, { x: 660, y: 212, time: 3039 }, { x: 455, y: 398, time: 3056 }, { x: 721, y: 156, time: 3073 }, { x: 672, y: 184, time: 3089 }, { x: 672, y: 184, time: 3106 }, { x: 907, y: 21, time: 3128 }, { x: 907, y: 21, time: 3142 }, { x: 879, y: 21, time: 3159 }, { x: 879, y: 21, time: 3173 }, { x: 895, y: 66, time: 3190 }],
        duration: 3103,
      },
      {
        id: 2,
        recording: [{ x: 194, y: 223, time: 118 }, { x: 704, y: 598, time: 167 }, { x: 493, y: 313, time: 191 }, { x: 501, y: 69, time: 219 }, { x: 627, y: 703, time: 233 }, { x: 672, y: 31, time: 248 }, { x: 1297, y: -116, time: 268 }, { x: 503, y: 217, time: 280 }, { x: 498, y: 262, time: 299 }, { x: 674, y: 200, time: 315 }, { x: 54, y: 258, time: 332 }, { x: 282, y: 329, time: 349 }, { x: 808, y: 133, time: 364 }, { x: 5, y: 77, time: 381 }, { x: 59, y: 345, time: 399 }, { x: 644, y: 693, time: 419 }, { x: 841, y: 720, time: 431 }, { x: 333, y: 786, time: 448 }, { x: 462, y: 853, time: 465 }, { x: 528, y: 644, time: 482 }, { x: 354, y: 622, time: 499 }, { x: -126, y: 798, time: 515 }, { x: -7, y: 539, time: 533 }, { x: 14, y: 486, time: 548 }, { x: 634, y: 618, time: 568 }, { x: 194, y: 662, time: 581 }, { x: 216, y: 615, time: 598 }, { x: 390, y: 551, time: 615 }, { x: 666, y: 305, time: 631 }, { x: 949, y: 113, time: 2017 }, { x: 593, y: 276, time: 2100 }, { x: 825, y: 206, time: 2123 }, { x: 659, y: 622, time: 2144 }, { x: 1042, y: 329, time: 2156 }, { x: 1790, y: 146, time: 2177 }, { x: 917, y: 182, time: 2194 }, { x: 1104, y: 138, time: 2207 }, { x: 986, y: 182, time: 2220 }, { x: 1536, y: 109, time: 2242 }, { x: 1434, y: 127, time: 2255 }, { x: 1260, y: 243, time: 2269 }, { x: 1264, y: 243, time: 2283 }, { x: 1429, y: -37, time: 2304 }, { x: 1149, y: -28, time: 2318 }, { x: 1199, y: -6, time: 2331 }, { x: 1217, y: -28, time: 2349 }, { x: 1598, y: -14, time: 2371 }, { x: 1755, y: -70, time: 2384 }, { x: 1755, y: -39, time: 2401 }, { x: 1603, y: -51, time: 2423 }, { x: 1746, y: -71, time: 2437 }, { x: 1862, y: -55, time: 2453 }, { x: 1757, y: -28, time: 2475 }, { x: 1698, y: 33, time: 2489 }, { x: 1776, y: 65, time: 2502 }, { x: 1582, y: 17, time: 2515 }, { x: 1582, y: 17, time: 2532 }, { x: 1540, y: -7, time: 2550 }],
        duration: 2432,
      },
    ],
  },
  studyList: {
    filters: {
      searchQuery: '',
      showAll: true,
    },
    studies: [{
      id: 1,
      url: 'https://s-media-cache-ak0.pinimg.com/736x/5d/4e/cc/5d4ecc2145f7153a09b44759319784fe.jpg',
      shortCode: '143a2',
    }],
    selectedStudy: 0,
  },
  watch: {
    game: {
      loc: { leftPerc: 0.50, topPerc: 0.50 },
      windowSize: { height: window.innerHeight, width: window.innerWidth },
      circle: { r: 40 },
      targetGames: 2,
      currGame: 1,
    },
    newSession: [],
  },
};

const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
