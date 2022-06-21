import { atom,  } from "recoil";


export const mouseState = atom<[number,number]>({
    key:"mouseState",
    default:[0,0]
})

export const appwinref = atom<any>({
    key:"appwinref",
    default:null
})

export const movewinState = atom<{id:string,dx:number,dy:number,wleft:number,wtop:number}>({
    key:"movewinState",
    default:{id:"",dx:0,dy:0,wleft:0,wtop:0}
})

export const  topbarState = atom({
    key:"topbarState",
    default:true
})