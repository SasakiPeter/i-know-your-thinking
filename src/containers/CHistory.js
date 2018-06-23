import { connect } from 'react-redux';
import History from '../components/History';

const mapStateToProps = (state) => {
  const history = state.postReducer.history
  return {
    history: history,
    current: history[history.length - 1],
    stepNumber: state.postReducer.stepNumber
  }
};

// const mapDispatchToProps = (dispatch) => {
//   return {

//   }
// };

const CHistory = connect(mapStateToProps, null)(History);

export default CHistory;