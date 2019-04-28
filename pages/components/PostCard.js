import React, { Component } from "react";
import "./PostCard.scss";

export default class PostCard extends Component {
    render() {
        const { key } = this.props;
        return (
            <div key={key} className="post-box">
                <div>
                    <img src="../../static/image/test1.jpg" />
                </div>
                <div>title</div>
                <div>내용</div>
            </div>
        );
    }
}
