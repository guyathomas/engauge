import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import PrimaryHeader from './PrimaryHeader';

function mapStateToProps(state) {
  console.log('I have no idea what is passed in here', state);
  const { review, watch, studies } = state;
  return { review, watch, studies };
  // const { watch } = state;
  // return { watch };

}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(PrimaryHeader);

export default App;
