import { connect } from 'react-redux';
import History from '../components/History';

const mapStateToProps = (state) => {
  console.log(state.postReducer.history);
  const history = state.postReducer.history
  return {
    history: history,
    current: history[history.length - 1],
    stepNumber: state.postReducer.stepNumber
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

const CHistory = connect(mapStateToProps, mapDispatchToProps)(History);

export default CHistory;