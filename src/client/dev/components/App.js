import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import PrimaryHeader from './PrimaryHeader';

function mapStateToProps(state) {
  return {
    // posts: state.posts,
    // comments: state.comments
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(PrimaryHeader);

export default App;
