import { Component } from 'react';
import { CirclesWithBar } from 'react-loader-spinner';
import css from './Loader.module.css';
import React from 'react';

class Loader extends Component {
  render() {
    return (
      <div className={css.loader}>
        <CirclesWithBar
          height="100"
          width="100"
          color="#E44848"
          outerCircleColor="#E44848"
          innerCircleColor="#E44848"
          barColor="#E44848"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
}

export default Loader;
