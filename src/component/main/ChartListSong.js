import React from "react";

export default function chartRight(props) {

  return (
    <li className="flex-col-item">
      <div className=" cards-rank top-1">
        <div className="t-number fist">{props.rank}</div>
        <div className=" singer-song">
          <div className="image-singer">
            <img src={props.img} alt="" />
            <div className="t-membrane">
              <a href={props.path}><i className="fas fa-play"></i></a>
            </div>
          </div>
          <div className="t-song ">
            <div className="name-song">
              <a href={props.path}>{props.song}</a>
            </div>
            <div className="t-singer">
              <a href={props.path}>{props.singer}</a>
            </div>
          </div>
        </div>
        <div className="t-percent fist">
          <p>{props.viewpercent}</p>
        </div>
      </div>
    </li>
  )
  
}