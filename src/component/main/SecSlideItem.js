import React from 'react';

export default function SecSlideItem(props) {

  return (
    <div className="slider-item">
      <div className="t-cards">
        <div className="t-cards-img">
          <a href={props.pathSinger} ><img src={props.imgSinger} alt={props.nameSong} /></a>
        </div>
        <div className="t-cards-title">
          <a href={props.pathsong}>{props.nameSong}</a>
        </div>
      </div>
    </div>
  );
  
}