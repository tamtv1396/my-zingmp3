import React from "react";

export default function ChartLeft(props) {
  const datacharleft = {
      "path":"trangchu",
      "textzingchart":"habazingchart",
      "timenow": "29/08/2020 15:05",
      "listenall": "Nghe tất cả"
  }
  return (
    <div className="chart-col-left">
      <div className="t-chart-realtime t-bg-img">
        <div className="realtime-header">
          <div className="flex-realtime">
            <div className="btn-zingchart">
              <a href={datacharleft.path}>{datacharleft.textzingchart}</a>
            </div>
            <div className="time-now">
              <p>{datacharleft.timenow}</p>
            </div>
            <div className="btn-listen-all">
              <a href={datacharleft.path}><i className="fas fa-play"></i>{datacharleft.listenall}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
