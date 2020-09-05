import React, { Component } from "react";
import SliderBigPage from "./SliderBigPage";
import SecLogin from "./SecLogin";
import SecSlideItem from "./SecSlideItem";
import SecChart from "./SecChart";
import SliderNoFocus from "./SliderNoFocus";
import SliderSingSong from "./SliderSingSong";
import NewSongItem from "./NewSongItem";


export default class MainPage extends Component {

    render() {
        return (
            <div className="t-main">
                <div className="container-1000">
                    <SliderBigPage></SliderBigPage>
                    <SecLogin></SecLogin>
                    <div className="sec-slider-list">
                        <div className="slider-list">
                            <div className=" slider-list-title">
                                <div className="t-title">#Chất</div>
                                <div className="btn-next-prev">
                                    <span className="btn-prev"><i className="fas fa-chevron-left"></i></span>
                                    <span className="btn-next"><i className="fas fa-chevron-right"></i></span>
                                </div>
                            </div>
                            <div className="slider-items">
                                <div className=" flex-row-slider">
                                    <SecSlideItem></SecSlideItem>
                                    <SecSlideItem></SecSlideItem>
                                    <SecSlideItem></SecSlideItem>
                                    <SecSlideItem></SecSlideItem>
                                    <SecSlideItem></SecSlideItem>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sec-slider-list">
                        <div className="slider-list">
                            <div className=" slider-list-title">
                                <div className="t-title">Cười thật tươi</div>
                                <div className="btn-next-prev">
                                    <span className="btn-prev"><i className="fas fa-chevron-left"></i></span>
                                    <span className="btn-next"><i className="fas fa-chevron-right"></i></span>
                                </div>
                            </div>
                            <div className="slider-items">
                                <div className=" flex-row-slider">
                                    <SecSlideItem></SecSlideItem>
                                    <SecSlideItem></SecSlideItem>
                                    <SecSlideItem></SecSlideItem>
                                    <SecSlideItem></SecSlideItem>
                                    <SecSlideItem></SecSlideItem>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SecChart></SecChart>
                    <SliderNoFocus ></SliderNoFocus>
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
                                    <SecSlideItem></SecSlideItem>
                                    <SecSlideItem></SecSlideItem>
                                    <SecSlideItem></SecSlideItem>
                                    <SecSlideItem></SecSlideItem>
                                    <SecSlideItem></SecSlideItem>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sec-slider-none-focus">
                        <div className="slider-singer-song">
                            <div className="slider-list-title">
                                <div className="t-title">
                                    Mới Phát Hành
                            </div>
                                <div className="btn-next-prev">
                                    <span className="btn-prev"><i className="fas fa-chevron-left"></i></span>
                                    <span className="btn-next"><i className="fas fa-chevron-right"></i></span>
                                </div>
                            </div>
                            <div className="cards-list">
                                <SliderSingSong
                                    imgsinger="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/5/9/7/c/597c5594c732d3857de91b16156f7f32.jpg"
                                    song="Họa mây"
                                    singer="X2X"
                                    ranknumber="#1"
                                ></SliderSingSong>
                                <SliderSingSong
                                    imgsinger="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/b/0/f/2/b0f2617eac4b87fd0affe726bfd81a0a.jpg"
                                    song="Bỏ lỡ một người"
                                    singer="Lê Bảo Bình"
                                    ranknumber="#2"
                                ></SliderSingSong>
                                <SliderSingSong
                                    imgsinger="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/6/d/d/a/6dda1e6d7690c4c43ed97d6150619495.jpg"
                                    song="Ai mang cô đơn đi"
                                    singer="KICM, APJ"
                                    ranknumber="#3"
                                ></SliderSingSong>
                            </div>
                        </div>
                    </div>
                    <div className="sec-new-song">
                        <div className="t-table">
                            <ul className="new-song-list">
                                <NewSongItem></NewSongItem>
                                <NewSongItem></NewSongItem>
                                <NewSongItem></NewSongItem>
                                <NewSongItem></NewSongItem>
                                <NewSongItem></NewSongItem>
                                <NewSongItem></NewSongItem>
                                <NewSongItem></NewSongItem>
                                <NewSongItem></NewSongItem>
                                <NewSongItem></NewSongItem>
                                <NewSongItem></NewSongItem>
                                <NewSongItem></NewSongItem>
                                <NewSongItem></NewSongItem>
                                <NewSongItem></NewSongItem>
                                <NewSongItem></NewSongItem>
                                <NewSongItem></NewSongItem>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

};