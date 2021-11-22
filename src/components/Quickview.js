import React from 'react';
import './Quickview.scss';
import CancelIcon from '@material-ui/icons/Cancel';

const Quickview = ( {bannerStyle,movies,popup,popupStatus}) => {
    return (
        <div className={`quickView ${popupStatus && "open"}`}>
          <div className="quickView__banner" style={bannerStyle}>
            <div className="quickView__content">
              <h3 className="quickView__title">
                {movies?.title || movies?.name || movies?.original_title}
              </h3>
              <p>synopsis : {movies?.overview}</p>
              <p>genre : {movies?.media_type}</p>
              <p>Date de sortie : {movies?.release_date}</p>
              <p>langues : {movies?.original_language}</p>
             
            </div>
            
          </div>
          <button className="quickView__close" onClick={popup}>
            <CancelIcon fontSize="large" />
          </button>
        </div>
      )
};

export default Quickview;