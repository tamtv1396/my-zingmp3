import React from "react";

export default function NewSongItem(props) {

    return (
      <li className="new-song-item">
        <div className="content-song">
          <div className="t-img-sing">
            <a href={props.path}><img src={props.imgsinger} alt={props.singer}/></a>
            <div className="opac-img"><a href="haba"><i className="fas fa-play"></i></a></div>
          </div>
          <div className="t-name-song t-center">
            <div className="t-song"><a href={props.path}>{props.song}</a></div>
            <div className="t-sing"><a href={props.path}>{props.singer}</a></div>
          </div>
          <div className="mic-extend t-right">
            <div className="t-mic-extend">
              <div className="t-mic"><a href={props.path}><i className="fas fa-microphone"></i></a></div>
              <div className="t-extend"><a href={props.path}><i className="fas fa-ellipsis-h"></i></a></div>
            </div>
          </div>
        </div>
        <div className="item-opac"></div>
      </li>
    )
    
}