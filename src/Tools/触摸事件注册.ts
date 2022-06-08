

const addmove = (touchdiv: HTMLElement, movediv: HTMLElement) => {
        // level++


        // console.log(touchdiv, "组件触摸事件注册完成");
        let startx: number
        let starty: number
        let innerx: number
        let innery: number
        let moveable = false
        const start = (e: MouseEvent) => {
                let zindex: any = localStorage.getItem('zindex')
                if (!zindex) {
                        localStorage.setItem('zindex', "1")
                } else {
                        zindex = `${zindex * 1 + 1}`
                        localStorage.setItem("zindex", zindex)
                }
                movediv.style.transition = 'all 0s'
                // movediv.style.zIndex = `${level}`
                moveable = true
                startx = e.pageX
                starty = e.pageY
                movediv.style.zIndex = zindex
                innerx = startx - movediv.offsetLeft
                innery = starty - movediv.offsetTop

                e.stopPropagation()
                touchdiv.onmousemove = move
        }
        const move = (e: MouseEvent) => {
                if (moveable) {
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
                }

                e.stopPropagation()
                e.preventDefault()
                return false

        }
        const end = (e: MouseEvent) => {
                touchdiv.onmousemove = null
                moveable = false
                movediv.style.transition = ''
                // movediv.style.zIndex = ''
        }

        touchdiv.onmousedown = start
        touchdiv.onmouseleave = end
        touchdiv.onmouseout = end
        touchdiv.onmouseup = end
}

export default addmove