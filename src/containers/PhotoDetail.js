import React, { Component, Fragment } from 'react';

import Navbar from '../components/Navbar';

import getPhotoAction from '../store/fetchApi/getPhoto';

class PhotoDetail extends Component {
  render() {
    const [ user, photo ] = this.props.history.location.state;

    const photoDetail = () => {
      const name = user.name;
      return (
        <section className="bg-white content-section">
          <div className="container">
            <div className="row mt-5 pt-3">
              <div className="col-lg-12 text-center">
                <div className="card mb-4 my-5 mx-5 px-3">
                  <div className="card-body">
                    <h2 className="card-title text-center display-4">{ photo.title }</h2>
                    <img className="card-img-top" src={ photo.url } alt="" />
                  </div>

                  <div className="card-footer text-muted mb-5" v-if="isLoad">
                    Uploaded by { name }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };

    return (
      <Fragment>
        <Navbar/>
        { photoDetail() }
      </Fragment>
    );
  }
};

export default PhotoDetail;
