import React, { Component } from "react";
import HeaderSearch from "./HeaderSearch";
import HeaderTopRight from "./HeaderTopRight";
import MenuTop from "./MenuTop";
import ListMenu from "../../mockup/listmenu.json";

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mp3logo: "mp3.zing",
      linklogotop: "trangchu"
    }
  }
  
  render() {
    return (
      <div className="header">
        <div className="top-bar">
          <div className="t-top-bar">
            <div className="container-1000">
              <div className=" flex-top ">
                <div className="flex-item-1">
                  <div className="logo ">
                    <a className="t-logo" href={this.state.linklogotop}>{this.state.mp3logo}</a>
                  </div>
                </div>
                <div className="flex-item-2">
                  <HeaderSearch></HeaderSearch>
                </div>
                <div className="flex-item-3">
                  <HeaderTopRight></HeaderTopRight>
                </div>
              </div>
              <div className="top-menu">
                <div className=" flx-menu">
                  {
                    ListMenu.map((value,key) => {
                      return (
                        <MenuTop 
                          key={key}
                          stt={key}
                          menuname={value.menutitle}
                          menupath={value.path}
                        ></MenuTop>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}
export default Header;