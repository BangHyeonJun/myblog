import React, { Component, Fragment } from "react";
import { observer, inject } from "mobx-react";
import anime from "animejs";
import Link from "next/link";
import "./Menu.scss";

@inject("store")
@observer
export default class Menu extends Component {
    state = {
        style: {
            menu_bg: {
                display: "none"
            }
        }
    };

    // 메뉴를 세팅해 준다.
    getMenuItem = (fid, id, title, open, child) => {
        let key = id * 50;
        return (
            <Fragment key={fid}>
                <li key={key} className="Menu-parents">
                    {title}
                </li>
                <ul>
                    {child.map((childMenu, idx) => {
                        let {
                            tree,
                            parentId,
                            id,
                            title,
                            url,
                            active
                        } = childMenu;
                        return <li key={key + id}>{title}</li>;
                    })}
                </ul>
            </Fragment>
        );
    };

    componentDidMount(nextProps) {
        // 모든 마운트가 완료된 후 발생
        this.props.store.MenuItem.showSideBar = this.showMenu;
        this.props.store.MenuItem.hideSideBar = this.hideMenu;
    }

    // Menu를 보여준다.
    showMenu = e => {
        e.preventDefault(); // 이전 이벤트를 해제
        this.setState({
            style: {
                menu_bg: {
                    display: "block"
                }
            }
        });
        anime({
            targets: this.menu,
            translateX: -300
        });
    };

    // Menu를 숨겨준다.
    hideMenu = e => {
        e.preventDefault(); // 이전 이벤트를 해제
        this.setState({
            style: {
                menu_bg: {
                    display: "none"
                }
            }
        });
        anime({
            targets: this.menu,
            translateX: 0
        });
    };

    hideMenuWIcon = e => {
        this.props.store.MenuItem.closeMenu(e);
        this.hideMenu(e);
    };

    render() {
        const { MenuItem } = this.props.store;
        const { style } = this.state;
        let fid = -99999;
        return (
            <Fragment>
                <div
                    onClick={this.hideMenuWIcon}
                    className="menu-bg"
                    style={style.menu_bg}
                />
                <div
                    onClick={this.showMenu}
                    ref={menu => (this.menu = menu)}
                    className="menu-container"
                >
                    <ul>
                        {MenuItem.Items.map(items => {
                            let { id, title, open, item } = items;
                            fid--;
                            return this.getMenuItem(fid, id, title, open, item);
                        })}
                    </ul>
                </div>
            </Fragment>
        );
    }
}
