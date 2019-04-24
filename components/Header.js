import React, { Component } from "react";
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

class MenuIcon extends Component {
    state = {
        faIcon: faBars,
        anim: {
            lotate: 720
        }
    };

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
    anime = () => {
        let self = this; // 자기 자신을 객체로 가지기 위한 부분
        let { faIcon, anim } = this.state;
        this.setState({
            anim: {
                lotate: anim.lotate > 0 ? 0 : 720
            }
        });
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
                console.log("progress : " + Math.round(anim.progress) + "%");
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
