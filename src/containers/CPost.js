import { connect } from 'react-redux';
import Post from '../components/Post';
import { postNumber } from '../actions';

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPostNumber: (number) => {
      dispatch(postNumber(number))
    }
  }
};

const CPost = connect(mapStateToProps, mapDispatchToProps)(Post);

export default CPost;