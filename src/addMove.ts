
const addMove = (touchdiv: HTMLElement, movediv: HTMLElement) => {

        const Pointstart = (e: PointerEvent) => {
                //获取触摸初始点
                // Print.log(style,'start',e);

                const startx = e.pageX
                const starty = e.pageY
                //获取触摸点在盒子内的位置
                const innerx = startx - movediv.offsetLeft
                const innery = starty - movediv.offsetTop

                //移动
                const move = (e: PointerEvent) => {
                        //获取移动的点
                        // Print.log(style,"move",e);

                        const movex = e.pageX
                        const movey = e.pageY
                        // 获取移动点在盒子内的位置
                        const inx = movex - movediv.offsetLeft
                        const iny = movey - movediv.offsetTop
                        //计算盒子需要移动到的点位
                        const movingx = inx - innerx
                        const movingy = iny - innery
                        //让盒子跟随移动
                        movediv.style.left = `${movediv.offsetLeft + movingx}px`
                        movediv.style.top = `${movediv.offsetTop + movingy}px`
                        e.stopPropagation()
                        e.preventDefault()
                        return false

                }
                touchdiv.addEventListener("pointermove", move)
                const end = (e: PointerEvent) => {
                        console.log("end",e);
                        
                        touchdiv.removeEventListener("pointermove", move)
                        // touchdiv.removeEventListener("pointerout", end)
                        // touchdiv.removeEventListener("pointercancel", end)
                        // touchdiv.removeEventListener("pointerleave", end)
                        touchdiv.removeEventListener("pointerup", end)
                        e.stopPropagation()
                        e.preventDefault()
                }

               
                // touchdiv.addEventListener('pointerout', end)
                // touchdiv.addEventListener('pointercancel', end)
                // touchdiv.addEventListener('pointerleave', end)
                touchdiv.addEventListener('pointerup', end)
                // touchdiv.addEventListener("pointerover", end)
                e.stopPropagation()
                e.preventDefault()
                return false

        }
        const touchstart = (e:TouchEvent) => {
                //获取触摸初始点
                // Print.log(style,'start',e);
                
                const startx = e.changedTouches[0].pageX
                const starty = e.changedTouches[0].pageY
                //获取触摸点在盒子内的位置
                const innerx = startx -  movediv.offsetLeft
                const innery = starty - movediv.offsetTop
                
                //移动
                const move = (e:TouchEvent) => {
                        //获取移动的点
                        // Print.log(style,"move",e);
                        
                        const movex = e.changedTouches[0].pageX
                        const movey = e.changedTouches[0].pageY
                        // 获取移动点在盒子内的位置
                        const inx = movex - movediv.offsetLeft
                        const iny = movey - movediv.offsetTop
                        //计算盒子需要移动到的点位
                        const movingx = inx - innerx
                        const movingy = iny - innery
                        //让盒子跟随移动
                        movediv.style.left =`${movediv.offsetLeft + movingx}px` 
                        movediv.style.top =`${movediv.offsetTop + movingy}px` 
                        e.stopPropagation()
                        e.preventDefault()
                        return false

                }
                const end = (e:TouchEvent) => {
                        touchdiv.removeEventListener('touchmove',move)
                        touchdiv.removeEventListener('touchend',end)
                        // e.stopPropagation()
                        // e.preventDefault()
                }
                
                touchdiv.addEventListener('touchmove',move,true)
                touchdiv.addEventListener('touchend',end)
                e.stopPropagation()
                // e.preventDefault()
                // return false
                
        }
        movediv.style.transition = "all 0s"
        touchdiv.addEventListener('touchstart',touchstart)
        touchdiv.addEventListener("pointerdown", Pointstart)
        

}

export default addMove