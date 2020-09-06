import React from "react";

export default function SliderSingSong(props) {

  return (
    <div className="card-item">
      <div className="t-card-item" >
        <div className="cards-new-issue">
          <div className="t-cards">
            <div className="avatar-issue">
              <div className="t-avatar">
                <a href={props.path}>
                  <img src={props.imgsinger} alt={props.singer} />
                </a>
                <div className="t-play">
                  <i className="fas fa-play"></i>
                </div>
                <div className="t-opacity">
                </div>
              </div>
            </div>
            <div className="caption-issue">
              <div className="new-issue-caption">
                <div className="song-singer-top">
                  <div className="song"> <a href={props.path}>{props.song}</a></div>
                  <div className="singer"><a href={props.path}>{props.singer}</a></div>
                </div>
                <div className="rank-bot">
                  <div className="rank-number"><a href={props.path}>{props.ranknumber}</a></div>
                  <div className="rank-time-now"><a href={props.path}>{props.date}</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}