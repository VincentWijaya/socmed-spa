import React from 'react';

const viewDetailPhoto = (props, photoId) => {
  props.history.push(`/photo/${photoId}`, [props.history.location.state[0], props.item]);
};

const PhotoItem = (props) => {
  const photo = props.item;

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <img className="card-img-top" src={photo.thumbnailUrl} alt="" />
        <div className="card-body">
          <h4 className="card-title">
            {photo.title}
          </h4>
          <button className="btn btn-ligth" title="View Detail Photo" data-toggle="tooltip" onClick={() => viewDetailPhoto(props, photo.id)}>
            <i className="fas fa-eye"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoItem;
