import { atom,  } from "recoil";

//test
export const 状态栏显示 = atom({
    key:"状态栏显示",
    default:true,
})

export const mouseState = atom<[number,number]>({
    key:"mouseState",
    default:[0,0]
})

export const appwinref = atom<any>({
    key:"appwinref",
    default:null
})