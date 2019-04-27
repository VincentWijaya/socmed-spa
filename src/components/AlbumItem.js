import React from 'react';

const viewAlbumPhotos = (props, albumId) => {
  props.history.push(`/album/photo/${albumId}`, props.albumsList.data[0].userId)
};

const AlbumItem = (props) => {
  const { item: album } = props;

  return (
    <tr>
      <td>{album.title}</td>
      <td>
        <button className="btn btn-ligth" title="View Album Photos" data-toggle="tooltip" onClick={() => viewAlbumPhotos(props, album.id)}>
          <i className="fas fa-eye"></i>
        </button>
      </td>
    </tr>
  )
};

export default AlbumItem;
