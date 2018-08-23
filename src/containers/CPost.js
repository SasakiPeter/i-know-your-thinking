import { connect } from 'react-redux';
import Post from '../components/Post';
import { postGuess, completed } from '../actions';

const mapStateToProps = (state) => {
  return {
    completed: state.postReducer.completed
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPostGuess: (history) => {
      dispatch(postGuess(history))
    },
    onCompleted: () => {
      dispatch(completed())
    }
  }
};

const CPost = connect(mapStateToProps, mapDispatchToProps)(Post);

export default CPost;