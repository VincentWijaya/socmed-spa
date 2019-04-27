import React from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';

import deleteCommentAction from '../store/fetchApi/deleteComment';

const deleteComment = (props, commentIndex) => {
  swal({
    title: "Are you sure?",
    text: "Are you sure that you want to delete this comment?",
    icon: "warning",
    dangerMode: true,
  })
    .then(willDelete => {
      if (willDelete) {
        props.deleteComment(commentIndex);
        swal("Deleted!", "Comment has been deleted!", "success");
      }
    });
};

const CommentItem = (props) => {
  const { item: comment } = props;

  return (
    <div className="card-footer text-muted mb-4">
      <h6>{ comment.name }: </h6>
      <p>{ comment.body }</p>
      <button type="button" className="btn btn-xs btn-danger" onClick={() => deleteComment(props, comment.index)}><i className="fa fa-trash fa-sm"/></button>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => {
  return {
    commentsList: state.fetchApi.comments,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteComment: (index) => {
      dispatch(deleteCommentAction(index));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem);
