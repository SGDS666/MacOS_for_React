import { SetterOrUpdater, useRecoilState } from "recoil"
import { applist, apptype } from "../程序配置"
import { 窗口内容 } from "../store"

export const useActiveWidow:()=>[applist, SetterOrUpdater<applist>] = (value:boolean=false) =>{
    const [活动窗口,set活动窗口] = useRecoilState(窗口内容)
    return [活动窗口,set活动窗口]
    //测试git

}

export const useRemoveWindow = () => {
    const [活动窗口,set活动窗口] = useRecoilState(窗口内容)
    
    return (app:apptype) =>{
        const 新窗口 = [...活动窗口]
        新窗口.forEach((item, index, arr) => {
            if (item === app) {
                arr.splice(index, 1)
            }
        })
        set活动窗口(新窗口)
    }

    
}