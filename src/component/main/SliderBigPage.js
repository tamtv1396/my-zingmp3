import React from "react";
const datasliderbig = {
  "linksliderbig": "linksliderbig",
  "imgbig": "http://placehold.jp/1366x400.png",
  
}

export default function SliderBigPage() {

  return (
    <div className="sec-slide-big">
      <a href={datasliderbig.linksliderbig}><img src={datasliderbig.imgbig} alt={datasliderbig.imgbig} /></a>
    </div>
  )
  
}