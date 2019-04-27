import React from 'react';

const viewAlbum = (props, userId) => {
  props.history.push(`/album/${userId}`, [props.item])
};

const viewPost = (props, userId) => {
  props.history.push(`/post/${userId}`, [props.item])
}

const UsersItem = (props) => {
  const { item: user } = props;
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.website}</td>
      <td>
        <button className="btn btn-ligth" title="View User Album" data-toggle="tooltip" onClick={() => viewAlbum(props, user.id)}>
          <i className="fas fa-images"></i>
        </button>
        &nbsp;
        <button className="btn btn-ligth" title="View User Post" data-toggle="tooltip" onClick={() => viewPost(props, user.id)}>
          <i className="fas fa-portrait"></i>
        </button>
      </td>
    </tr>
  )
};

export default UsersItem;
