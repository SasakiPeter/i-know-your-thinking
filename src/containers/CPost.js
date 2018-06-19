import { connect } from 'react-redux';
import Post from '../components/Post';
import { postGuess } from '../actions';

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPostGuess: (history, stepNumber) => {
      dispatch(postGuess(history, stepNumber))
    }
  }
};

const CPost = connect(mapStateToProps, mapDispatchToProps)(Post);

export default CPost;