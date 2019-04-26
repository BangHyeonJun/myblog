import { action, observable } from "mobx";

/*
        { tree: 0, id:0, title: "프로그래밍", url: "", open: false},
        { tree:1, prentId: 0, title: "리액트", url: "/react", active: false},
        { tree:1, prentId: 0, title: "리액트", url: "/react", active: false},        
        { tree: 0, id:1, title: "개인", url: "" },
*/

export default class HeaderItem {
    // 헤더 아이템 초기화
    // 자식은 id가 1부터 시작
    // 부모는 id가 0부터 시작
    @observable Items = [
        {
            tree: 0,
            id: 0,
            title: "프로그래밍",
            open: false,
            item: [
                {
                    tree: 1,
                    parentId: 0,
                    id: 1,
                    title: "리액트",
                    url: "/react",
                    active: false
                },
                {
                    tree: 1,
                    parentId: 0,
                    id: 2,
                    title: "Node.js",
                    url: "/nodejs",
                    active: false
                }
            ]
        },

        {
            tree: 0,
            id: 1,
            title: "개인",
            open: false,
            item: [
                {
                    tree: 1,
                    parentId: 1,
                    id: 1,
                    title: "Node.js",
                    url: "/nodejs",
                    active: false
                }
            ]
        }
    ];

    @observable showSideBar = null;
    @observable hideSideBar = null;
    @observable closeMenu = null;
}
