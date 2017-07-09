/**
 * Created by chuen on 09-Jul-17.
 */
import React from 'react';
import loader from '../../images/loader.gif';

const LoadingComponent = () => (
  <div className="loading-component">
    <div className="loader">
      <img src={loader} alt="loader" />
    </div>
  </div>
);

export default LoadingComponent;
