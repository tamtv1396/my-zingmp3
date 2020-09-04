import React, { Component } from "react";
import SliderBigPage from "./SliderBigPage";
import SecLogin from "./SecLogin";
import SecSliderList from "./SecSliderList";
import SecChart from "./SecChart";
import SliderNoFocus from "./SliderNoFocus";


export default class MainPage extends Component {

    render() {
        return (
            <div className="t-main">
                <div className="container-1000">
                    <SliderBigPage></SliderBigPage>
                    <SecLogin></SecLogin>
                    <div className="sec-slider-list">
                        <SecSliderList 
                            title={"Cuộc sống muôn màu"}
                        ></SecSliderList>
                    </div>
                    <div className="sec-slider-list">
                        <SecSliderList
                            title={"Tình khúc bolero"}
                        ></SecSliderList>
                    </div>
                    <SecChart></SecChart>
                    <SliderNoFocus></SliderNoFocus>

                    <div className="sec-slider-list">
                        {/* <!-- Cuoc song muon mau  --> */}
                        <div className="slider-list">
                            <div className=" slider-list-title">
                                <div className="t-title">
                                    Top 100 <span><i className="fas fa-chevron-right"></i></span>
                                </div>
                                <div className="btn-next-prev">
                                    <span className="btn-prev"><i className="fas fa-chevron-left"></i></span>
                                    <span className="btn-next"><i className="fas fa-chevron-right"></i></span>
                                </div>
                            </div>
                            <div className="slider-items">
                                <div className=" flex-row-slider">
                                    <div className="slider-item">
                                        <div className="t-cards">
                                            <div className="t-cards-img">
                                                <a href="haba" ><img src="https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/4/e/0/6/4e06553d094c479a2d93729c631e0c05.jpg" alt="hình ảnh" /></a>
                                            </div>
                                            <div className="t-cards-title">
                                                <a href="haba">Talk About Love</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider-item">
                                        <div className="t-cards">
                                            <div className="t-cards-img">
                                                <a href="haba" ><img src="https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/4/e/0/6/4e06553d094c479a2d93729c631e0c05.jpg" alt="hình ảnh" /></a>
                                            </div>
                                            <div className="t-cards-title">
                                                <a href="haba">Talk About Love</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider-item">
                                        <div className="t-cards">
                                            <div className="t-cards-img">
                                                <a href="haba" ><img src="https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/4/e/0/6/4e06553d094c479a2d93729c631e0c05.jpg" alt="hình ảnh" /></a>
                                            </div>
                                            <div className="t-cards-title">
                                                <a href="haba">Talk About Love</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider-item">
                                        <div className="t-cards">
                                            <div className="t-cards-img">
                                                <a href="haba" ><img src="https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/4/e/0/6/4e06553d094c479a2d93729c631e0c05.jpg" alt="hình ảnh" /></a>
                                            </div>
                                            <div className="t-cards-title">
                                                <a href="haba">Talk About Love</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slider-item">
                                        <div className="t-cards">
                                            <div className="t-cards-img">
                                                <a href="haba" ><img src="https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/4/e/0/6/4e06553d094c479a2d93729c631e0c05.jpg" alt="hình ảnh" /></a>
                                            </div>
                                            <div className="t-cards-title">
                                                <a href="haba">Talk About Love</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sec-slider-none-focus">
                        <div className="slider-singer-song">
                            <div className=" slider-list-title">
                                <div className="t-title">
                                    Mới Phát Hành
                            </div>
                                <div className="btn-next-prev">
                                    <span className="btn-prev"><i className="fas fa-chevron-left"></i></span>
                                    <span className="btn-next"><i className="fas fa-chevron-right"></i></span>
                                </div>
                            </div>
                            <div className="cards-list">
                                <div className="card-item">
                                    <div className="t-card-item" >
                                        <div className="cards-new-issue">
                                            <div className="t-cards">
                                                <div className="avatar-issue">
                                                    <div className="t-avatar">
                                                        <a href="haba">
                                                            <img src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/5/9/7/c/597c5594c732d3857de91b16156f7f32.jpg" alt="" />
                                                        </a>
                                                        <div className="t-play">
                                                            <i className="fas fa-play"></i>
                                                        </div>
                                                        <div className="t-opacity">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="caption">
                                                    <div className="new-issue-caption">
                                                        <div className="song-singer-top">
                                                            <div className="song"> <a href="haba">Họa mây</a></div>
                                                            <div className="singer"><a href="haba">X2X</a></div>
                                                        </div>
                                                        <div className="rank-bot">
                                                            <div className="rank-number"><a href="haba">haba1</a></div>
                                                            <div className="rank-time-now"><a href="haba">28.8.2020</a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-item">
                                    <div className="t-card-item" >
                                        <div className="cards-new-issue">
                                            <div className="t-cards">
                                                <div className="avatar-issue">
                                                    <div className="t-avatar">
                                                        <a href="haba">
                                                            <img src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/b/0/f/2/b0f2617eac4b87fd0affe726bfd81a0a.jpg" alt="" />
                                                        </a>
                                                        <div className="t-play">
                                                            <i className="fas fa-play"></i>
                                                        </div>
                                                        <div className="t-opacity">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="caption">
                                                    <div className="new-issue-caption">
                                                        <div className="song-singer-top">
                                                            <div className="song"> <a href="haba">Bỏ lỡ một người</a></div>
                                                            <div className="singer"><a href="haba">Lê Bảo Bình</a></div>
                                                        </div>
                                                        <div className="rank-bot">
                                                            <div className="rank-number"><a href="haba">haba2</a></div>
                                                            <div className="rank-time-now"><a href="haba">28.8.2020</a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-item">
                                    <div className="t-card-item" >
                                        <div className="cards-new-issue">
                                            <div className=" t-cards">
                                                <div className="avatar-issue">
                                                    <div className="t-avatar">
                                                        <a href="haba"><img src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/6/d/d/a/6dda1e6d7690c4c43ed97d6150619495.jpg" alt="" /></a>
                                                        <div className="t-play">
                                                            <i className="fas fa-play"></i>
                                                        </div>
                                                        <div className="t-opacity">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="caption">
                                                    <div className="new-issue-caption">
                                                        <div className="song-singer-top">
                                                            <div className="song"> <a href="haba">Ai mang cô đơn đi</a></div>
                                                            <div className="singer"><a href="haba">KICM, APJ</a></div>
                                                        </div>
                                                        <div className="rank-bot">
                                                            <div className="rank-number"><a href="haba">haba3</a></div>
                                                            <div className="rank-time-now"><a href="haba">28.8.2020</a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sec-new-song">
                        <div className="t-table">
                            <div className="t-col-4">
                                <ul className="new-song-list">
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
                                </ul>
                            </div>
                            <div className="t-col-4">
                                <ul className="new-song-list">
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
                                </ul>
                            </div>
                            <div className="t-col-4">
                                <ul className="new-song-list">
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
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

};