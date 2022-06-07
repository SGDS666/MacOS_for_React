import { atom,  } from "recoil";
import { applist, 默认程序, } from "../components/程序坞/程序配置";

export const 状态栏显示 = atom({
    key:"状态栏显示",
    default:true,
})

export const 窗口内容 = atom<applist>({
    key:"窗口管理",
    default:[]
})

export const appsState = atom<applist>({
    key:"applist",
    default:默认程序
})