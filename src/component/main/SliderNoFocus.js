import React from "react";

export default function SliderNoFocus(props) {

  return (
    <div className="card-item">
      <div className="t-card-item" >
        <div className="cards-wrap">
          <div className="t-cards">
            <div className="avatar">
              <div className="t-avatar">
                <a href="haba">
                  <img src={props.imgsinger} alt={props.singer} />
                </a>
                <div className="t-play">
                  <i className="far fa-play-circle"></i>
                </div>
              </div>
            </div>
            <div className="caption">
              <div className="t-caption">
                <div className="t-top">
                  <a className="btn-zingchoice" href={props.path}><i className="fas fa-star"></i><span>{props.zingchoice}</span></a>
                </div>
                <div className="t-bot">
                  <a className="t-name" href={props.path}>{props.singer}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  
}