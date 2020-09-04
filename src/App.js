import React from 'react';
import Header from './component/header/Header'

function App() {
    return (
        <div className="App">
            {/* begin header  */}
            <Header></Header>
            {/* end header  */}

            <div className="t-main">
                <div className="container-1000">
                    <div className="sec-slide-big">
                        <div className="silder" >
                            <img src="https://photo-zmp3.zadn.vn/banner/c/f/d/d/cfdd4d322865ddee4b5c9d638c0bc490.jpg" alt="" />
                        </div>
                    </div>
                    <div className="sec-login">
                        <div className="t-sec-login ">
                            <div className="flex-login-body">
                                <div className="flex-item">
                                    <a className="ic-mp3" href="haba">link</a>
                                </div>
                                <div className="flex-item">
                                    <a href="haba" className="txt-advide">Hãy đăng nhập để khám phá thêm nhiều bài hát dành riêng cho bạn
                            </a>
                                </div>
                                <div className="flex-item">
                                    <a href="haba" className=" t-btn btn-login">Đăng nhập</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sec-slider-list">
                        {/* <!-- Cuoc song muon mau  --> */}
                        <div className="slider-list">
                            <div className=" slider-list-title">
                                <div className="t-title">
                                    Cuộc Sống Muôn Màu
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

                        {/* <!-- Menu nhac cho hom nay --> */}
                        <div className="slider-list">
                            <div className=" flex-row slider-list-title">
                                <div className="t-title">
                                    Menu nhạc cho hôm nay
                            </div>
                                <div className="btn-next-prev">
                                    <span className="btn-prev"><i className="fas fa-chevron-left"></i></span>
                                    <span className="btn-next"><i className="fas fa-chevron-right"></i></span>
                                </div>
                            </div>
                            <div className="slider-items">
                                <div className="flex-row flex-row-slider">
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
                    <div className="sec-charts">
                        <div className="t-flex-charts">
                            {/* <!--  left  --> */}
                            <div className="chart-col-left">
                                <div className="t-chart-realtime t-bg-img">
                                    <div className="realtime-header">
                                        <div className="flex-realtime">
                                            <div className="btn-zingchart">
                                                <a href="haba">habazingchart</a>
                                            </div>
                                            <div className="time-now">
                                                <p>29/08/2020 15:05</p>
                                            </div>
                                            <div className="btn-listen-all">
                                                <a href="haba"><i className="fas fa-play"></i>Nghe tất cả</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                    <div className="sec-slider-none-focus">
                        <div className="slider-singer-song">
                            <div className="cards-list">
                                <div className="card-item">
                                    <div className="t-card-item" >
                                        <div className="cards-wrap">
                                            <div className="t-cards">
                                                <div className="avatar">
                                                    <div className="t-avatar">
                                                        <a href="haba">
                                                            <img src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/5/9/7/c/597c5594c732d3857de91b16156f7f32.jpg" alt="" />
                                                        </a>
                                                        <div className="t-play">
                                                            <i className="far fa-play-circle"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="caption">
                                                    <div className="t-caption">
                                                        <div className="t-top">
                                                            <a className="btn-zingchoice" href="haba"><i className="fas fa-star"></i><span>zingchoice</span></a>
                                                        </div>
                                                        <div className="t-bot">
                                                            <a className="t-name" href="haba">Trịnh Thăng Bình</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-item">
                                    <div className="t-card-item" href="haba">
                                        <div className="cards-wrap">
                                            <div className="t-cards">
                                                <div className="avatar">
                                                    <div className="t-avatar">
                                                        <a href="haba">
                                                            <img src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/b/f/b/9/bfb9522fe78758e81dfcb4b70d3f8f52.jpg" alt="" />
                                                        </a>
                                                        <div className="t-play">
                                                            <i className="far fa-play-circle"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="caption">
                                                    <div className="t-caption">
                                                        <div className="t-top">
                                                            <a className=" btn-zingchoice" href="haba"><i className="fas fa-star"></i><span>zingchoice</span></a>
                                                        </div>
                                                        <div className="t-bot">
                                                            <a className="t-name" href="haba">Hương Tràm</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-item">
                                    <div className="t-card-item" href="haba">
                                        <div className="cards-wrap">
                                            <div className=" t-cards">
                                                <div className="avatar">
                                                    <div className="t-avatar">
                                                        <a href="haba"><img src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/6/d/d/a/6dda1e6d7690c4c43ed97d6150619495.jpg" alt="" /></a>
                                                        <div className="t-play">
                                                            <i className="far fa-play-circle"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="caption">
                                                    <div className="t-caption">
                                                        <div className="t-top">
                                                            <a className="btn-zingchoice" href="haba"><i className="fas fa-star"></i><span>zingchoice</span></a>
                                                        </div>
                                                        <div className="t-bot">
                                                            <a className="t-name" href="haba">OnlyC</a>
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
        </div>
    );
}

export default App;
