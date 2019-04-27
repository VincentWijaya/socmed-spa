
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

import Navbar from '../components/Navbar'
import PhotoItem from '../components/PhotoItem';

import getPhotosAction from '../store/fetchApi/getPhoto';

class AlbumPhoto extends Component {
  componentDidMount() {
    this.props.getPhotos('albumId', Number(this.props.match.params.albumId));
  }

  render() {
    const loading = () => {
      return (
        <div>
          <div className="mt-5">
            <Fragment>
              <div className="pt-5"> <div className="loader"></div> </div>
            </Fragment>
          </div>
        </div>
      )
    };

    const photos = () => {
      const [ user, album ] = this.props.history.location.state;

      const photo = this.props.photosList.data.map((datum, index) => {
        return (
          <PhotoItem item={datum} key={index} {...this.props} />
        )
      });

      return (
        <section className="bg-white content-section">
          <div className="container">
            <div className="row mt-5 pt-3">
              <div className="col-lg-12">
                <h1>{ album.title } from { user.name }</h1>
                <div className="col-lg-9 mt-5">
                  <div className="row mt-2">
                    {photo}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    };

    return (
      <Fragment>
        <Navbar />
        {this.props.photosList.isLoaded ? photos() : loading()}
      </Fragment>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    photosList: state.fetchApi.photos,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getPhotos: (query, albumId) => {
      dispatch(getPhotosAction(query, albumId))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumPhoto)
