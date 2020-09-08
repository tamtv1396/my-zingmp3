import React from "react";

export default function HeaderTopRight() {

  const logintop = {
    login:"Đăng nhập",
    path:"/login",
  }
  
  return (
    <div className="header-top-right">
      <div className="t-top-right ">
        <div className="flex-top-right">
          <div className="t-item-1">
            <a className="t-inline t-upload" href={logintop.path}><i className="fas fa-arrow-up t-hover"></i></a>
          </div>
          <div className="t-item-2">
            <a  href={logintop.path} className="t-inline t-noti"><i className="far fa-bell t-hover"></i></a>
          </div>
          <div className="t-item-3">
            <div className=" t-login">
              <a  href={logintop.path} className="t-inline"><i className="fas fa-user-alt"></i></a>
              <span className="t-hover">{logintop.login}</span>
              <span ><i className="fas fa-chevron-down t-hover"></i></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  
}