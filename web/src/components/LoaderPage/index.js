import React from 'react';
import Loader from 'react-loader-spinner';

import './styles.css'

function LoaderPage() {
  return (
    <div className="loader-page-container">
      <div>
        <Loader
          type="Rings"
          color="#FFF"
          height={150}
          width={150}
        />
      </div>
    </div>
  );
}
export default LoaderPage;