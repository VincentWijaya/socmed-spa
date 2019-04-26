import React, { Component, Fragment } from 'react'

import Navbar from '../components/Navbar'
import AlbumItem from '../components/AlbumItem';

class PostDetail extends Component {
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

    return (
      <Fragment>
        <Navbar />
      </Fragment>
    )
  }
};

export default PostDetail
