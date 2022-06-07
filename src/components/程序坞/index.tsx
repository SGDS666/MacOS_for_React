/* eslint-disable react/jsx-pascal-case */
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRecoilState, } from 'recoil';
import { useActiveWidow } from '../../hooks/usewindow';
import { appsState } from '../../store';
import style from './index.module.scss';
import { apptype, 默认程序 } from './程序配置';

const 程序: React.FC<apptype> = ({ name, icon, date, time, self,click, mouseleft }) => {
    // const [apptop, setapptop] = useState(0)
    // const [appsize, setappsize] = useState(60)
    const [appcenter, setappcenter] = useState(0)
    const [apps,setAppState] = useRecoilState(appsState)
    const appref: any = useRef(name)
    const [size, top] = useMemo<[number, number]>(() => {
        let ressize = 60
        let restop = 0
        if (mouseleft && appcenter) {
            const appgap = Math.abs(mouseleft - appcenter)
            // app.innerHTML = `gap:${appgap} size:${50 + 100 - appgap} top:${120 - appgap}`
            if (appgap < 500) {
                // 尺寸 = 基础50 + 100/除以距离  越小越大
                const size = 60 + 140 - appgap / 1.5
                const top = 70 - appgap / 5
                if (size >= 60) {
                    ressize = size

                } else {
                    ressize = 60

                }
                if (top >= 0) {
                    restop = -top

                } else {
                    restop = 0

                }

            } else {
                ressize = 60
                restop = 0
            }
        }
        return [ressize, restop]
    }, [appcenter, mouseleft])

    useEffect(() => {
        const appdiv: HTMLDivElement = appref.current
        setappcenter(appdiv.offsetLeft + appdiv.offsetWidth / 2)
        if(self){
            const [app,index] = self
            const divleft = appdiv.offsetLeft
            const divtop = appdiv.offsetTop
            // console.dir(appdiv);
            
            if(!app.left && !app.top){
                const newapps = [...apps]
                newapps[index] = {...app,left:divleft,top:divtop}
                setAppState(newapps)
            }
            

        }

        let timeupdate: NodeJS.Timeout

        if (time) {
            const timebox: any = document.querySelector<HTMLDivElement>(`.${style.time}`)
            timeupdate = setInterval(() => {
                timebox.innerHTML = `${new Date().getHours()}:${new Date().getMinutes()} `
            }, 1000)
        }
        return () => {
            clearInterval(timeupdate)
        }

    }, [apps, mouseleft, self, setAppState, time])




    return (
        <div
            className={style.app}
            ref={appref}
            onClick={click}
            style={{ width: `${size}px`, height: `${size}px`, top: `${top}px`, transition: `${mouseleft ? 'all 0s' : ""}` }}>
            <div className={style.icon}>
                {date ? <div className={style.date}>{new Date().getDate()}</div> : null}
                {time ? <div className={style.time}></div> : null}
                <img src={icon} alt={""} />
                <div className={style.tip}>{name}</div>
            </div>
        </div>
    )
}

const 程序坞: React.FC<{}> = () => {

    const dockref: any = useRef()
    const [apps,] = useRecoilState(appsState)
    const [mouseleft, setmouseleft] = useState(0)
    const [active, setactive] = useActiveWidow()
    const openApp = useCallback((app: apptype) => {

        //窗口未打开,
        
        //窗口已打开,
        return (e:MouseEvent) => {
            console.log(e);
            const left = e.pageX
            const top = e.pageY
            setactive([{...app,left:left,top:top},...active])
            
            
        }
    }, [active, setactive])
    useEffect(() => {
        const dock: HTMLDivElement = dockref.current
        dock.onmouseenter = (e) => {
        }
        dock.onmousemove = e => {
            const dockleft = dock.offsetLeft
            const mousex = e.clientX - dockleft
            setmouseleft(mousex)
        }
        dock.onmouseleave = e => {
            setmouseleft(0)
        }
    }, [apps])
    return (
        <div className={style.box} ref={dockref} >
            <div className={style.space}></div>
            <div className={style.apps}>
                {apps.map((app, index) => {

                    return (
                        <程序
                            self={[app,index]}
                            mouseleft={mouseleft}
                            key={app.name}
                            click={openApp(app)}
                            src={app.src}
                            type={app.type}
                            icon={app.icon}
                            time={app.time}
                            date={app.date}
                            name={app.name}

                        />
                    )
                })}
            </div>


        </div>
    )
}


export default 程序坞