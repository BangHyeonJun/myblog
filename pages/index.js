import React, { Component } from "react";
import Layout from "../components/Layout";
import { StickyContainer, Sticky } from "react-sticky";
import PostCard from "./components/PostCard";
import Search from "./components/Search";
import "./index.scss";

export default class Index extends Component {
    render() {
        const posts = [
            { img: "test", title: "test", summary: "test" },
            { img: "test", title: "test", summary: "test" },
            { img: "test", title: "test", summary: "test" },
            { img: "test", title: "test", summary: "test" }
        ];
        return (
            <Layout>
                <StickyContainer>
                    <Sticky>
                        {({
                            style,

                            // the following are also available but unused in this example
                            isSticky,
                            wasSticky,
                            distanceFromTop,
                            distanceFromBottom,
                            calculatedHeight
                        }) => <Search style={style} />}
                    </Sticky>
                    <div className="post-container">
                        {posts.map((post, idx) => {
                            return <PostCard key={idx} />;
                        })}
                    </div>
                </StickyContainer>
            </Layout>
        );
    }
}
