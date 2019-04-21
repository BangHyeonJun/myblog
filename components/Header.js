import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
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
    animeToggleValue = 0;
    anime = () => {
        const tempValue = this.animeToggleValue > 0 ? 0 : 360;
        this.animeToggleValue = tempValue;
        anime({
            targets: this.icon,
            rotate: {
                value: tempValue,
                duration: 1000,
                easing: "easeInOutSine",
                autoplay: false,
                loop: true
            }
        });
    };

    render() {
        return (
            <div className="menu-btn" onMouseDown={this.anime}>
                {/* 여기는 메뉴 버튼을 넣는 곳 입니다.*/}
                <div ref={icon => (this.icon = icon)}>
                    <FontAwesomeIcon icon={faBars} />
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
