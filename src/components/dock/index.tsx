import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import App from '../../appConfig/app';
import appconfig from '../../appConfig/appconfig';
import { mouseState } from '../../store';
import style from './index.module.scss';
const Dock: React.FC<{}> = () => {
    const mouse = useRecoilValue(mouseState)
    // console.log(mouse[0], mouse[1]);
    const screenheight = window.innerHeight
    const dockref: any = useRef()
    const [docksize, setdocksize] = useState<[number, number]>([0, 0]) //docklleft dockwidth
    const [isInDock, setInDock] = useState(false)
    //如果鼠标x 在dock内 且 鼠标Y距离dock<10 则判断鼠标在dock内
    const 满足进入条件 = (mouse[0] >= docksize[0] && mouse[0] <= docksize[0] + docksize[1] && screenheight - mouse[1] < 80)
    const 进入离开事件 = useCallback(() => {
        if (满足进入条件 && !isInDock) {

            setInDock(true)
        }
        if (isInDock && !满足进入条件) {
            setInDock(false)
        }
    }, [isInDock, 满足进入条件])
    进入离开事件()


    useEffect(() => {
        const dock: HTMLDivElement = dockref.current
        console.log(dock.offsetHeight, dock.offsetWidth, dock.offsetLeft);
        setdocksize([dock.offsetLeft, dock.offsetWidth])
    }, [])
    return (
        <div className={style.box} ref={dockref} >

            {/* <App iconSrc=''/> */}
            {appconfig.map((app) => {
                return <App key={app.name + "app"} iconSrc={app.icon} name={app.name} baseleft={docksize[0]} />
            })}
        </div>
    )
}


export default Dock