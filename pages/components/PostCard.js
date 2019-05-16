import React, { Component } from "react";
import "./PostCard.scss";

export default class PostCard extends Component {
    render() {
        const { key } = this.props;
        return (
            <div key={key} className="post">
                <div className="image-box">
                    <img src="../../static/image/test1.jpg" />
                </div>
                <div className="contents-box">
                    <span className="title">title</span>
                    <span className="description">내용</span>
                    <div className="tag-box">
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                        <div>test</div>
                    </div>
                </div>
            </div>
        );
    }
}
