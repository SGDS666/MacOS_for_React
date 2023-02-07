import { atom } from "recoil";

export const WindowFullScreen = atom({
    key: "windowFullScreen",
    default: false
})

export const localStorageEffect = (key: string) => ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
    }
    onSet((newValue: any) => {
        if (newValue === undefined) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, JSON.stringify(newValue));
        }
    });
};

export const WindowList = atom<{id:string,ele:JSX.Element}[]>({
    key:"windowList",
    default:[]
})