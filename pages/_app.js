import App, { Container } from "next/app";
import React from "react";
import { initializeStore } from "../stores/index";
import { Provider } from "mobx-react";

// 공용 SCSS
import "../sass/common.scss";

// 폰트 어썸
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";

class MyMobxApp extends App {
    static async getInitialProps(appContext) {
        // Get or Create the store with `undefined` as initialState
        // This allows you to set a custom default initialState
        const mobxStore = initializeStore();
        // Provide the store to getInitialProps of pages
        appContext.ctx.mobxStore = mobxStore;

        let appProps = await App.getInitialProps(appContext);

        return {
            ...appProps,
            initialMobxState: mobxStore
        };
    }

    constructor(props) {
        super(props);
        const isServer = !process.browser;
        this.mobxStore = isServer ? props.initialMobxState : initializeStore();
        library.add(faStroopwafel);
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <Provider store={this.mobxStore}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
}
export default MyMobxApp;
