import React from 'react';

const viewAlbumPhotos = () => {
  console.log('delete photo');
};

const PhotoItem = (props) => {
  const datum = props.item;

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <img className="card-img-top" src={datum.thumbnailUrl} alt="" />
        <div className="card-body">
          <h4 className="card-title">
            {datum.title}
          </h4>
          <button className="btn btn-ligth" title="View Album Photos" data-toggle="tooltip" onClick={() => viewAlbumPhotos()}>
            <i className="fas fa-eye"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoItem;
