import React, { Component } from "react";
import "./Search.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class Search extends Component {
    render() {
        const { style } = this.props;
        return (
            <div style={style} className="search-container">
                <input
                    type="text"
                    placeholder="검색"
                    className="serach-input"
                />
                <div className="icon-container" style={{ right: "16%" }}>
                    <FontAwesomeIcon icon={faSearch} className="search" />
                </div>
            </div>
        );
    }
}
