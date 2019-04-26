import React, { Component, Fragment } from "react";
import { observer, inject } from "mobx-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import anime from "animejs";
import "./Header.scss";

class Logo extends Component {
    render() {
        return (
            <div>
                {/* 여기는 로고를 넣는 곳 입니다.*/}
                로고
            </div>
        );
    }
}

@inject("store")
@observer
class MenuIcon extends Component {
    state = {
        faIcon: faBars,
        anim: {
            lotate: 720
        }
    };

    componentDidMount(nextProps) {
        // 모든 마운트가 완료된 후 발생
        this.props.store.MenuItem.closeMenu = this.anime;
    }

    // 메뉴 아이콘을 바꿔주는 부분
    changeIcon = icon => {
        if (icon === faBars) {
            this.setState({
                faIcon: faTimes
            });
        } else if (icon === faTimes) {
            this.setState({
                faIcon: faBars
            });
        }
    };

    // 애니메이션 진행 부분
    anime = e => {
        e.preventDefault(); // 이전 이벤트를 해제
        let self = this; // 자기 자신을 객체로 가지기 위한 부분
        let { faIcon, anim } = this.state;
        this.setState({
            anim: {
                lotate: anim.lotate > 0 ? 0 : 720
            }
        });

        if (anim.lotate === 720) {
            this.props.store.MenuItem.showSideBar(e);
        } else {
            this.props.store.MenuItem.hideSideBar(e);
        }

        anime({
            targets: this.icon,
            rotate: {
                value: anim.lotate,
                duration: 700,
                easing: "easeInOutSine",
                autoplay: false,
                loop: true
            },
            update: function(anim) {
                if (Math.round(anim.progress) > 80) {
                    self.changeIcon(faIcon);
                }
            }
        });
    };

    render() {
        const { faIcon } = this.state;
        return (
            <div className="menu-btn" onMouseDown={this.anime}>
                {/* 여기는 메뉴 버튼을 넣는 곳 입니다.*/}
                <div ref={icon => (this.icon = icon)}>
                    <FontAwesomeIcon icon={faIcon} />
                </div>
            </div>
        );
    }
}

export default class Header extends Component {
    // anime = () => {
    //     const { translateX, translateY } = this.props;
    //     anime({
    //         targets: this.box,
    //         translateX: { value: translateX },
    //         translateY: { value: translateY },
    //         duration: 2000
    //     });
    // };

    render() {
        return (
            <header>
                <Logo />
                <MenuIcon />
            </header>
        );
    }
}

// import Link from "next/link";

// const linkStyle = {
//     marginRight: "1rem"
// };

// const Header = () => {
//     return (
//         <div>
//             <Link href="/">
//                 <a style={linkStyle}>홈</a>
//             </Link>
//             <Link href="/board">
//                 <a style={linkStyle}>게시판</a>
//             </Link>
//         </div>
//     );
// };

// export default Header;
