import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import App from '../../appConfig/app';
import appconfig from '../../appConfig/appconfig';
import {  mouseState } from '../../store';
import style from './index.module.scss';
const Dock: React.FC<{}> = () => {
    const mouse = useRecoilValue(mouseState)
    // console.log(mouse[0], mouse[1]);
    const screenheight = window.innerHeight
    const dockref: any = useRef()
    const [docksize, setdocksize] = useState<[number, number]>([0, 0]) //docklleft dockwidth


    const 是否进入 = useMemo(() => {
        //如果鼠标x 在dock内 且 鼠标Y距离dock<10 则判断鼠标在dock内
        const 满足进入条件 = (mouse[0] >= docksize[0] && mouse[0] <= docksize[0] + docksize[1] && screenheight - mouse[1] < 200)
        if (满足进入条件) {

            return true
        }

        return false

    }, [docksize, mouse, screenheight])



    useEffect(() => {
        const dock: HTMLDivElement = dockref.current
        // console.log(dock.offsetHeight, dock.offsetWidth, dock.offsetLeft);
        setdocksize([dock.offsetLeft, dock.offsetWidth])
    }, [是否进入])
    return (
        <div className={style.box} ref={dockref} onMouseMove={
            () => {
                const dock:HTMLDivElement = dockref.current
                dock.style.transition = "all 0s"
            }}
            onMouseLeave={
                () => {
                    const dock:HTMLDivElement = dockref.current
                    dock.style.transition = ''
                }
            }
            >

            {/* <App iconSrc=''/> */}
            {appconfig.map((app) => {
                return <App isinDock={是否进入} key={app.name + "app"} iconSrc={app.icon} name={app.name} baseleft={docksize[0]} />
            })}
        </div>
    )
}


export default Dock