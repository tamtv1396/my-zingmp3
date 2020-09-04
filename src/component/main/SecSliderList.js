import React, { Component } from 'react';

class  SecSliderList extends Component{
    render(){
        return (
            <div className="slider-list">
                <div className=" slider-list-title">
                    <div className="t-title">{this.props.title}</div>
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
        );
    }
}

export default SecSliderList;