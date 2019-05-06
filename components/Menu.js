import React, { Component, Fragment } from "react";
import { observer, inject } from "mobx-react";
import anime from "animejs";
import Link from "next/link";
import "./Menu.scss";

@inject("store")
@observer
export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("getDerivedStateFromProps");
        return {
            name: "test"
        };
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate");
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        logErrorToMyService(error, info);
    }

    render() {
        const { Menu } = this.props.store;
        const { items, openChild, activeChild } = this.props.store.Menu;
        return (
            <ul>
                {items.map((parent, idx) => {
                    return (
                        <Fragment key={parent.id + "_Container"}>
                            {parent.child.length > 0 ? (
                                <Fragment key={parent.id + "_box"}>
                                    <li
                                        key={parent.id}
                                        onClick={() => openChild(parent.id)}
                                    >
                                        {parent.title}
                                    </li>
                                    <ul
                                        style={{
                                            display: parent.open
                                                ? "block"
                                                : "none"
                                        }}
                                    >
                                        {parent.child.map((childe, idx) => {
                                            return (
                                                <Link
                                                    key={childe.id + "_Link"}
                                                    href={`${childe.url}`}
                                                >
                                                    <li key={childe.id}>
                                                        {childe.title}
                                                    </li>
                                                </Link>
                                            );
                                        })}
                                    </ul>
                                </Fragment>
                            ) : (
                                <Link
                                    key={parent.id + "_Link"}
                                    href={`${parent.url}`}
                                >
                                    <li key={parent.id}>{parent.title}</li>
                                </Link>
                            )}
                        </Fragment>
                    );
                })}
            </ul>
        );
    }
}
