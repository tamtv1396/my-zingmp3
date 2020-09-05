import React, { Component } from "react";

class SliderSingSong extends Component{
    render(){
        return (
            <div className="card-item">
                <div className="t-card-item" >
                    <div className="cards-new-issue">
                        <div className="t-cards">
                            <div className="avatar-issue">
                                <div className="t-avatar">
                                    <a href="haba">
                                        <img src={this.props.imgsinger} alt="" />
                                    </a>
                                    <div className="t-play">
                                        <i className="fas fa-play"></i>
                                    </div>
                                    <div className="t-opacity">
                                    </div>
                                </div>
                            </div>
                            <div className="caption-issue">
                                <div className="new-issue-caption">
                                    <div className="song-singer-top">
                                        <div className="song"> <a href="haba">{this.props.song}</a></div>
                                        <div className="singer"><a href="haba">{this.props.singer}</a></div>
                                    </div>
                                    <div className="rank-bot">
                                        <div className="rank-number"><a href="haba">{this.props.ranknumber}</a></div>
                                        <div className="rank-time-now"><a href="haba">28.8.2020</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 
export default SliderSingSong;