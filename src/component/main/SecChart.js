import React from "react";
import ChartLeft from "./ChartLeft";

export default function SecChart(props) {
  const dataright=props.newSong
  
  return (
    <div className="sec-charts">
      <div className="t-flex-charts">
        {/* <!--  left  --> */}
        <ChartLeft></ChartLeft>
        {/* <!-- right --> */}
        <div className="chart-col-right">
          <div className="t-list-song ">
            <ul className="t-list">
              <li className="flex-col-item">
                <div className=" cards-rank top-1">
                  <div className="t-number fist">01</div>
                  <div className=" singer-song">
                    <div className="image-singer">
                      <img src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/b/0/f/2/b0f2617eac4b87fd0affe726bfd81a0a.jpg" alt="" />
                      <div className="t-membrane">
                        <a href="haba"><i className="fas fa-play"></i></a>
                      </div>
                    </div>
                    <div className="t-song ">
                      <div className="name-song">
                        <a href="haba">Bỏ lỡ một người</a>
                      </div>
                      <div className="t-singer">
                        <a href="haba">Lê Bảo Bình</a>
                      </div>
                    </div>
                  </div>
                  <div className="t-percent fist">
                    <p>48%</p>
                  </div>
                </div>
              </li>
              <li className="flex-col-item">
                <div className=" cards-rank top-1">
                  <div className="t-number second">02</div>
                  <div className=" singer-song">
                    <div className="image-singer">
                      <img src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/b/0/f/2/b0f2617eac4b87fd0affe726bfd81a0a.jpg" alt="" />
                      <div className="t-membrane">
                        <a href="haba"><i className="fas fa-play"></i></a>
                      </div>
                    </div>
                    <div className="t-song ">
                      <div className="name-song">
                        <a href="haba">Bỏ lỡ một người</a>
                      </div>
                      <div className="t-singer">
                        <a href="haba">Trịnh Thăng Bình</a>
                      </div>
                    </div>
                  </div>
                  <div className="t-percent second">
                    <p>31%</p>
                  </div>
                </div>
              </li>
              <li className="flex-col-item">
                <div className=" cards-rank top-1">
                  <div className="t-number third">03</div>
                  <div className=" singer-song">
                    <div className="image-singer">
                      <img src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/b/0/f/2/b0f2617eac4b87fd0affe726bfd81a0a.jpg" alt="" />
                      <div className="t-membrane">
                        <a href="haba"><i className="fas fa-play"></i></a>
                      </div>
                    </div>
                    <div className="t-song ">
                      <div className="name-song">
                        <a href="haba">Bỏ lỡ một người</a>
                      </div>
                      <div className="t-singer">
                        <a href="haba">Lê Bảo Bình</a>
                      </div>
                    </div>
                  </div>
                  <div className="t-percent third">
                    <p>31%</p>
                  </div>
                </div>
              </li>
              <li className="flex-col-item">
                <div className=" cards-rank top-1">
                  <div className="t-number ">04</div>
                  <div className=" singer-song">
                    <div className="image-singer">
                      <img src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/b/0/f/2/b0f2617eac4b87fd0affe726bfd81a0a.jpg" alt="" />
                      <div className="t-membrane">
                        <a href="haba"><i className="fas fa-play"></i></a>
                      </div>
                    </div>
                    <div className="t-song ">
                      <div className="name-song">
                        <a href="haba">Bỏ lỡ một người</a>
                      </div>
                      <div className="t-singer">
                        <a href="haba">Lê Bảo Bình</a>
                      </div>
                    </div>
                  </div>
                  <div className="t-percent fist">
                  </div>
                </div>
              </li>
              <li className="flex-col-item">
                <div className=" cards-rank top-1">
                  <div className="t-number ">05</div>
                  <div className=" singer-song">
                    <div className="image-singer">
                      <img src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/b/0/f/2/b0f2617eac4b87fd0affe726bfd81a0a.jpg" alt="" />
                      <div className="t-membrane">
                        <a href="haba"><i className="fas fa-play"></i></a>
                      </div>
                    </div>
                    <div className="t-song ">
                      <div className="name-song">
                        <a href="haba">Bỏ lỡ một người</a>
                      </div>
                      <div className="t-singer">
                        <a href="haba">Lê Bảo Bình</a>
                      </div>
                    </div>
                  </div>
                  <div className="t-percent ">
                  </div>
                </div>
              </li>



              {/* <!-- bottom list --> */}
              <li className="flex-col-item">
                <div className="t-all">
                  <a href="haba">Xem tất cả</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" week-chart">
        <div className=" t-week-chart">
          <div className="week-chart-item">
            <img src="https://static-zmp3.zadn.vn/skins/zmp3-v5.2/images/song-vn-2x.jpg" alt="" />
          </div>
          <div className="week-chart-item">
            <img src="https://static-zmp3.zadn.vn/skins/zmp3-v5.2/images/mv-vn-2x.jpg" alt="" />
          </div>
          <div className="week-chart-item">
            <img src="https://static-zmp3.zadn.vn/skins/zmp3-v5.2/images/web_song_usuk.png" alt="" />
          </div>
          <div className="week-chart-item">
            <img src="https://static-zmp3.zadn.vn/skins/zmp3-v5.2/images/song-vn-2x.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
  
}