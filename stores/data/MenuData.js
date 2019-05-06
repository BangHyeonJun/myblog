/**
 * Menu에서 보여줘야할 아이템을 여기에 지정해 줍니다.
 * 트리 구조는 최대 2레벨 까지 가능합니다.
 * {
 *  id: 부모 Menu의 ID를 지정해줍니다.
 *  title : 부모  Menu의 이름
 *  open : 처음 자식 노드를 open 시킬지 말지를 정합니다.
 *  child : [ 자식 노드의 집합
 *              {
 *                  id : 자식 노드의 ID를 지정해 줍니다.
 *                  title : 자식 노드의 이름
 *                  url : 이동시켜야 할 url
 *                  active : 클릭되어져있는지 아닌지를 확인합니다.
 *              }
 *          ]
 * }
 */
let MenuItem = [
    {
        id: "Home",
        url: "/",
        title: "홈",
        open: false,
        child: []
    },
    {
        id: "Programming",
        title: "프로그래밍",
        open: true,
        child: [
            {
                id: "Programming_react",
                title: "리액트",
                url: "/react",
                active: true
            },
            {
                id: "Programming_nodejs",
                title: "Node.js",
                url: "/nodejs",
                active: false
            }
        ]
    },
    {
        id: "Programming1",
        title: "프로그래밍",
        open: false,
        child: [
            {
                id: "Programming1_react",
                title: "리액트",
                url: "/react",
                active: false
            },
            {
                id: "Programming1_nodejs",
                title: "Node.js",
                url: "/nodejs",
                active: false
            }
        ]
    },
    {
        id: "Programming2",
        title: "프로그래밍",
        open: false,
        child: [
            {
                id: "Programming2_react",
                title: "리액트",
                url: "/react",
                active: false
            },
            {
                id: "Programming2_nodejs",
                title: "Node.js",
                url: "/nodejs",
                active: false
            }
        ]
    }
];
export default MenuItem;
