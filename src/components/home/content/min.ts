//管理最小化窗口

import { atom} from "recoil"

//样式更新
//top位置

export const minList = atom<any[]>({
    key:"minbox",
    default:[]
})

export const delList = (arr:any[],item:any) => {
    
    const newlist:any[] = []
    arr.forEach(i=>{
        if(i===item){
            return 
        }
        newlist.push(i)
    })
    return newlist
}