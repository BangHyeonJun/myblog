import { action, observable } from "mobx";

export default class HeaderItem {
    // 헤더 아이템 초기화
    @observable Item = [
        { title: "홈", url: "/test" },
        { title: "어바웃", url: "/test2" }
    ];

    // constructor() {
    //     // 헤더 아이템 생성
    //     this.Item = [
    //         { title: "홈", url: "/test" },
    //         { title: "어바웃", url: "/test2" }
    //     ];
    // }

    // 헤더 부분에 항목을 추가
    @action
    setItem(title, url) {
        this.Item.push({ title: title, url: url });
    }
}
