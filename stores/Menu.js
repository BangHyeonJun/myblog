import { action, observable } from "mobx";
import MenuItem from "./data/MenuData";

export default class HeaderItem {
    // 메뉴에 보여줘야 할 데이터
    @observable items = MenuItem;

    // child를 toggle을 하기 위한 부분
    @action
    openChild = id => {
        const exist = this.items.find(item => item.id === id);
        if (!exist) {
            // ID가 존재하지 않는다면 문제가 있는거임
            console.error("잘못된 메뉴가 클릭되어졌습니다.");
            return;
        }
        exist.open = !exist.open;
        console.log(exist.open);
    };

    // child 클릭시 실행시켜줘야 할 함수
    @action
    activeChild = id => {
        // 부모 트리 레벨을 돌려줍니다.
        let exist = null;
        this.items.map(item => {
            // 자식 트리 레벨을 돌려줍니다.
            item.child.map(childItem => {
                // id가 맞으면 토글 시켜줍니다.
                if (childItem.id === id) {
                    exist = childItem;
                } else {
                    // 아이디가 맞지 않다면 false 출력
                    childItem.active = false;
                }
            });
        });
        exist.active = !exist.active;
        exist.title = "test";
        console.log(exist.active);
    };

    @observable showSideBar = null;
    @observable hideSideBar = null;
    @observable closeMenu = null;
}
