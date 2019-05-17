import React, { Component } from "react";
import Layout from "../components/Layout";
import "./post.scss";

export default class post extends Component {
    render() {
        return (
            <Layout>
                <div className="post-container">
                    <div className="profile-container">
                        <div className="avatar-box">
                            <img
                                className="avatar"
                                src="../../static/image/test1.jpg"
                            />
                        </div>
                        <div className="profile-box">
                            <div className="name-box">
                                <div className="user-name">이름</div>
                                <div className="user-id">아이디</div>
                            </div>
                            <div className="summary-box">
                                소개말입니다. 그래서 소개발소개말입니다. 그래서
                                소개발소개말입니다. 그래서 소개발소개말입니다.
                                그래서 소개발소개말입니다. 그래서 소개발
                            </div>
                            <div className="contact-box">링크 입니다.</div>
                        </div>
                    </div>
                    <div className="content-container">포스트</div>
                    <div className="index-container">메뉴</div>
                </div>
            </Layout>
        );
    }
}
