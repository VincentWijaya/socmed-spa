import React from 'react';
import { connect } from 'react-redux';

const viewAlbum = (props, userId) => {
  props.resetLoader();
  props.history.push(`/album/${userId}`, props.item)
};

const UsersItem = (props) => {
  const { item: user } = props;
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.website}</td>
      <td>
        <button className="btn btn-ligth" title="View User Album" data-toggle="tooltip" onClick={() => viewAlbum(props, user.id)}>
          <i className="fas fa-eye"></i>
        </button>
      </td>
    </tr>
  )
};

const mapDispatchToProps = () => (dispatch, ownProps) => {
  return {
    resetLoader: () => {
      dispatch({ type: 'RESET_LOADER' })
    }
  }
}

export default connect(mapDispatchToProps, null)(UsersItem);
