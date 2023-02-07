import { atom, useRecoilValue } from "recoil"
import { THEME } from "../components/store/Theme"
import { localStorageEffect } from "../components/store/window"

export const Theme = {
    亮 :()=>({
        bcc$:"white",
        bcc:"rgba(255,255,255,.7)",
        bcc2:"rgb(246 246 246)",
        bcc3:"rgb(246 246 246,.4)",
        bcc4:"rgb(188,188,188,.4)",
        color:"black",
        color2:"rgb(147, 147, 147)",
        color3:"rgba(129, 128, 128, 0.1843137255)",
        iframeFilter:""
        
    }),
    暗:()=>({
        bcc$:"#282828",
        bcc:"#00000093",
        bcc2:"rgba(51,51,51,.62)",
        bcc3:"#4141419e",
        bcc4:"rgba(117,117,117,.32)",
        color:"white",
        color2:"#606060",
        color3:"#555555",
        iframeFilter:"brightness(0.8) grayscale(40%)"
    }),
    自动:()=>{
        if(new Date().getHours()>=17||new Date().getHours()<=6){
            return Theme.暗()
        }else{
            return Theme.亮()
        }
        
    }
    
}
export const useTheme = () => {
    const theme = useRecoilValue(THEME)
    const res = Theme[theme]()
    return res
}

export interface 强调色 {
    蓝色: string;
    紫色: string;
    粉色: string;
    红色: string;
    橙色: string;
    黄色: string;
    绿色: string;
    石墨色: string;
}
export const COLOR:强调色 = {
    蓝色:"#057AFF",
    紫色:"#953D96",
    粉色:"#F74F9E",
    红色:"#E86B6C",
    橙色:"#F6821B",
    黄色:"#FDD266",
    绿色:"#62BA46",
    石墨色:"#AFAFAE",
}
export const C = atom<keyof 强调色 >({
    key:"color",
    default:"蓝色",
    effects_UNSTABLE: [localStorageEffect('color'),]
    
})
export const useColor = () => {
    const Color = useRecoilValue(C)
    return [Color,COLOR[Color]] //第一个参数是key 第二个参数是颜色值
}