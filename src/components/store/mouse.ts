import { atom } from "recoil";

export const mouse = atom<[number,number]>({
    key:"mouse",
    default:[0,0]
})

export const Gmouse = atom<[number,number]>({
    key:"Gmouse",
    default:[0,0]
})

export const CsizeElement = atom<{startpost?:[number,number],ele:HTMLDivElement|null,father:HTMLDivElement|null}>({
    key:"cSizeElement",
    default:{startpost:[0,0],ele:null,father:null},

})