import { atom } from "recoil";
import { localStorageEffect } from "./window";

export const THEME = atom<"亮"|"暗"|"自动">({
    key:"THEME",
    default:"自动",
    effects_UNSTABLE: [localStorageEffect('THEME'),]
})