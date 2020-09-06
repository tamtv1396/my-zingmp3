import React from 'react';

export default function SecLogin(props) {
  return (
    <div className="sec-login">
      <div className="t-sec-login ">
        <div className="flex-login-body">
          <div className="flex-item">
            <a className="ic-mp3" href={props.pathmp3}>{props.textmp3}</a>
          </div>
          <div className="flex-item">
            <a href={props.pathlogin} className="txt-advide">{props.textlogin}</a>
          </div>
          <div className="flex-item">
            <a href={props.pathlogin} className=" t-btn btn-login">{props.nameLogin}</a>
          </div>
        </div>
      </div>
    </div>
  );
}