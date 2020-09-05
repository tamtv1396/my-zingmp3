import React, { Component } from "react";

export default class NewSongItem extends Component {

    render() {
        return (
            <li className="new-song-item">
                <div className="content-song">
                    <div className="t-img-sing">
                        <a href="haba"><img src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/6/4/d/4/64d4974ef0260ac43fd470d69c1fcda9.jpg" alt="" /></a>
                        <div className="opac-img"><a href="haba"><i className="fas fa-play"></i></a></div>
                    </div>
                    <div className="t-name-song t-center">
                        <div className="t-song"><a href="haba">Lắng nghe anh lúc này</a></div>
                        <div className="t-sing"><a href="haba">Đức tường</a></div>
                    </div>
                    <div className="mic-extend t-right">
                        <div className="t-mic-extend">
                            <div className="t-mic"><a href="haba"><i className="fas fa-microphone"></i></a></div>
                            <div className="t-extend"><a href="haba"><i className="fas fa-ellipsis-h"></i></a></div>
                        </div>
                    </div>
                </div>
                <div className="item-opac"></div>
            </li>
        )
    }
}