import React from "react";
import ChartLeft from "./ChartLeft";
import ChartListSong from "./ChartListSong";

export default function SecChart(props) {
  const secchart = {
    "playall": "xem tất cả",
    "path": "/play-all"
  }
  const websong = [
    {
      "img": "https://static-zmp3.zadn.vn/skins/zmp3-v5.2/images/song-vn-2x.jpg",
      "dereption": "bài hát việt nam"
    },
    {
      "img": "https://static-zmp3.zadn.vn/skins/zmp3-v5.2/images/mv-vn-2x.jpg",
      "dereption": "mv viet nam"
    },
    {
      "img": "https://static-zmp3.zadn.vn/skins/zmp3-v5.2/images/mv-vn-2x.jpg",
      "dereption": "nhạc us"
    },
    {
      "img": "https://static-zmp3.zadn.vn/skins/zmp3-v5.2/images/song-vn-2x.jpg",
      "dereption": "bài hát việt nam"
    }
  ]
  return (
    <div className="sec-charts">
      <div className="t-flex-charts">
        {/* <!--  left  --> */}
        <ChartLeft></ChartLeft>
        {/* <!-- right --> */}
        <div className="chart-col-right">
          <div className="t-list-song ">
            <ul className="t-list">
              {
                props.datachartright.map((value, key) => {
                  return (
                    <ChartListSong
                      key={key}
                      id={key}
                      path={value.path}
                      img={value.img}
                      singer={value.singer}
                      song={value.song}
                      rank={value.rank}
                      viewpercent={value.viewpercent}
                    ></ChartListSong>
                  )
                })
              }
              {/* <!-- bottom list --> */}
              <li className="flex-col-item">
                <div className="t-all">
                  <a href={secchart.path}>{secchart.playall}</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" week-chart">
        <div className=" t-week-chart">
          {
            websong.map((value, key) => {
              return (
                <div className="week-chart-item">
                  <img src={value.img} alt={value.dereption} />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )

}