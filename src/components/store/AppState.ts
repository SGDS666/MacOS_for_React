import { atom } from "recoil";
import { localStorageEffect } from "./window";

export const AppState = atom<{[key:string]:boolean}>({
    key:"AppState",
    default:{},
    effects_UNSTABLE: [localStorageEffect("AppState"),]
})