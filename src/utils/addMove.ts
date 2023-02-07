
import { useMemo } from "react"
import { useRecoilValue } from "recoil"
import { moveApp } from "../components/store/app"
import { Gmouse } from "../components/store/mouse"

const useMove = () => {
        const { t: mapp, startpost } = useRecoilValue(moveApp)
        const Gm = useRecoilValue(Gmouse)
        const [innerx, innery] = useMemo(() => {
                if (!mapp) {
                        return [0,0]
                }
                const mleft = mapp.offsetLeft
                const mtop = mapp.offsetTop
                const innerx = startpost[0] - mleft
                const innery = startpost[1] - mtop
                return [innerx,innery]
        },[mapp, startpost])
        if (!mapp) {
                return
        }
        const mleft = mapp.offsetLeft
        const mtop = mapp.offsetTop
         // 获取移动点在盒子内的位置
         const inx = Gm[0] - mleft
         const iny = Gm[1] -mtop
         //计算盒子需要移动到的点位
         const movingx = inx - innerx
         const movingy = iny - innery
        mapp.style.left = `${mleft + movingx}px`
        mapp.style.top = `${mtop + movingy}px`
        //获取鼠标在mapp的位置




}

export default useMove