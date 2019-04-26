import React from 'react';

const deleteComment = (props, commentId) => {
  console.log('Delete comment', commentId)
};

const CommentItem = (props) => {
  const { item: comment } = props;

  return (
    <div className="card-footer text-muted mb-4">
      <h6>{ comment.name }: </h6>
      <p>{ comment.body }</p>
      <button type="button" className="btn btn-xs btn-danger" onClick={() => deleteComment(props, comment.id)}><i className="fa fa-trash fa-sm"/></button>
    </div>
  )
};

export default CommentItem;
