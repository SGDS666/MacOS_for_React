import Vuebg from '../../../../image/vue-js.jpg'
import Angularbg from '../../../../image/angularbg.jpg'
import Reactbg from '../../../../image/reactbg.png'
export type card = {
    info: string[];
    img: string;
    url: string;
    name:string;
}
export type cards = card[]
export interface Top {
    url: string,
    name: string,
    reason: string,
    introduce: string,
    img:string,
}
export const TopObj:Top = {
    url:"https://beta.reactjs.org/",
    name:"React.js",
    reason:"热门开发框架",
    introduce:"掌握React使用小技巧",
    img:Reactbg
}
export const tsCards: cards = [
    {
        info: ["精选框架 vue", "页面搭建高手", "助你快速搭建页面"],
        img: Vuebg,
        url: "https://cn.vuejs.org",
        name:"vue"
    },
    {
        info: ["精选框架 angular", "老牌框架", "创建高效、复杂、精致的单页面应用"],
        img: Angularbg,
        url: "https://angular.cn",
        name:"angular"
    }
]