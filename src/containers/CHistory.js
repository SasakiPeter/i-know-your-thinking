import { connect } from 'react-redux';
import History from '../components/History';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    number: state.postReducer
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

const CHistory = connect(mapStateToProps, mapDispatchToProps)(History);

export default CHistory;