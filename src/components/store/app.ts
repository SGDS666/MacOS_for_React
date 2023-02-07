import { atom } from "recoil";
import { Set } from "typescript";

export const opencontent = atom({
    key:"opencontent",
    default:1
})
interface MoveApp {
    t:null|HTMLDivElement, //当前节点
    startpost:[number,number],//点击坐标
    last?:null|HTMLDivElement,//上一个节点 用于比较
    OpenSet?:Set<any> //当前总共打开的窗口集合
}
export const moveApp = atom<MoveApp>({
    key:"moveApp",
    default:{t:null,startpost:[0,0],last:null,OpenSet:new Set()}
})
export const zindex = atom<number>({
    key:"z",
    default:1
})
export const FUll = atom<boolean>({
    key:"full",
    default:false
})
