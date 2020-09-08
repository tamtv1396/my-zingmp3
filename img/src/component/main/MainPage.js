import React, { Component } from "react";
import SliderBigPage from "./SliderBigPage";
import SecLogin from "./SecLogin";
import SecSlideItem from "./SecSlideItem";
import SecChart from "./SecChart";
import SliderNoFocus from "./SliderNoFocus";
import SliderSingSong from "./SliderSingSong";
import NewSongItem from "./NewSongItem";

// json
import listSong from "../../mockup/listsong.json";
import sliderSingSong from "../../mockup/slidersingsong.json";
import newSong from "../../mockup/newsong.json";
import datachartright from "../../mockup/datachartright.json";

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathmp3: "/trangchu",
      textmp3: "link",
      pathlogin: "/login",
      textlogin: "Hãy đăng nhập để khám phá thêm nhiều bài hát dành riêng cho bạn",
      nameLogin: "Đăng nhập",
      titlechat: "#Chất",
      listSong: listSong,
      sliderSingSong: sliderSingSong,
      newSong:newSong,
      datachartright:datachartright,
    }
  }
  
  render() {
  
    return (
      <div className="t-main">
        <div className="container-1000">
          <SliderBigPage
          ></SliderBigPage>
          <SecLogin
            pathmp3={this.state.pathmp3}
            textnoti={this.state.textnoti}
            pathlogin={this.state.pathlogin}
            textlogin={this.state.textlogin}
            btnLogin={this.state.btnLogin}
            nameLogin={this.state.nameLogin}
          ></SecLogin>
          <div className="sec-slider-list">
            <div className="slider-list">
              <div className=" slider-list-title">
                <div className="t-title">{this.state.titlechat}</div>
                <div className="btn-next-prev">
                  <span className="btn-prev"><i className="fas fa-chevron-left"></i></span>
                  <span className="btn-next"><i className="fas fa-chevron-right"></i></span>
                </div>
              </div>
              <div className="slider-items">
                <div className=" flex-row-slider">
                  {
                    this.state.listSong.map((value, key) => {
                      return (
                        <SecSlideItem
                          key={key}
                          stt={key}
                          pathSinger={value.pathSinger}
                          imgSinger={value.imgSinger}
                          pathSong={value.pathSong}
                          nameSong={value.nameSong}
                        ></SecSlideItem>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="sec-slider-list">
            <div className="slider-list">
              <div className=" slider-list-title">
                <div className="t-title">{this.state.titlechat}</div>
                <div className="btn-next-prev">
                  <span className="btn-prev"><i className="fas fa-chevron-left"></i></span>
                  <span className="btn-next"><i className="fas fa-chevron-right"></i></span>
                </div>
              </div>
              <div className="slider-items">
                <div className=" flex-row-slider">
                  {
                    this.state.listSong.map((value, key) => {
                      return (
                        <SecSlideItem
                          key={key}
                          stt={key}
                          pathSinger={value.pathSinger}
                          imgSinger={value.imgSinger}
                          pathSong={value.pathSong}
                          nameSong={value.nameSong}
                        ></SecSlideItem>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
          <SecChart
            datachartright={this.state.datachartright}
          ></SecChart>
          <div className="sec-slider-none-focus">
            <div className="slider-singer-song">
              <div className="cards-list">
                {
                  this.state.sliderSingSong.map((value, key) => {
                    return (
                      <SliderNoFocus
                        key={key}
                        id={key}
                        imgsinger={value.imgsinger}
                        song={value.song}
                        singer={value.singer}
                        path={value.path}
                        zingchoice={value.zingchoice}
                      ></SliderNoFocus>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className="sec-slider-list">
            {/* <!-- Cuoc song muon mau  --> */}
            <div className="slider-list">
              <div className=" slider-list-title">
                <div className="t-title">
                  {this.state.titlechat}<span><i className="fas fa-chevron-right"></i></span>
                </div>
                <div className="btn-next-prev">
                  <span className="btn-prev"><i className="fas fa-chevron-left"></i></span>
                  <span className="btn-next"><i className="fas fa-chevron-right"></i></span>
                </div>
              </div>
              <div className="slider-items">
                <div className=" flex-row-slider">
                  {
                    this.state.listSong.map((value, key) => {
                      return (
                        <SecSlideItem
                          key={key}
                          stt={key}
                          pathSinger={value.pathSinger}
                          imgSinger={value.imgSinger}
                          pathSong={value.pathSong}
                          nameSong={value.nameSong}
                        ></SecSlideItem>
                      )
                    })
                  }
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
                {
                  this.state.sliderSingSong.map((value, key) => {
                    return (
                      <SliderSingSong
                        key={key}
                        id={key}
                        imgsinger={value.imgsinger}
                        song={value.song}
                        singer={value.singer}
                        ranknumber={value.ranknumber}
                        date={value.date}
                        path={value.path}
                      ></SliderSingSong>
                    )
                  })
                }

              </div>
            </div>
          </div>
          <div className="sec-new-song">
            <div className="t-table">
              <ul className="new-song-list">
              {
                  this.state.newSong.map((value, key) => {
                    return (
                      <NewSongItem
                        key={key}
                        id={key}
                        imgsinger={value.imgsinger}
                        song={value.song}
                        singer={value.singer}
                        path={value.path}
                      ></NewSongItem>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
    
  };

};