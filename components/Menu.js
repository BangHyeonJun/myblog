import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import "./Menu.scss";

@inject("store")
@observer
export default class Menu extends Component {
    onClic;

    render() {
        const { MenuItem } = this.props.store;
        return (
            <div className="menu-container">
                <ul>
                    {MenuItem.Item.map((temp, idx) => {
                        return setItem(idx, temp.title, temp.url);
                    })}
                </ul>
            </div>
        );
    }
}

let setItem = (key, title, url) => {
    return <li key={key}>{title}</li>;
};
