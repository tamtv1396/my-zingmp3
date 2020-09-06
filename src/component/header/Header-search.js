import React from "react";

export default function HeaderSearch() {
    return (
        <div className="header-search">
            <form>
                <div className="f-top-search">
                    <span><a href="haba"><i className="fas fa-search m-l-15"></i></a></span>
                    <span><input className="ip-txt" type="text" placeholder="Nhập tên bài hát, ca sĩ hoặc mv..."></input></span>
                </div>
            </form>
        </div>
    )
}