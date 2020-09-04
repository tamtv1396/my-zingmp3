import React, { Component } from "react";
import HeaderSearch from "./Header-search";
import HeaderTopRight from "./Header-top-right";
import MenuTop from "./Menu-top"

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="top-bar">
                    <div className="t-top-bar">
                        <div className="container-1000">
                            <div className=" flex-top ">
                                <div className="flex-item-1">
                                    <div className="logo ">
                                        <a className="t-logo" href="haba">mp3.zing</a>
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
                                <MenuTop></MenuTop>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
export default Header;