/* eslint-disable react/jsx-pascal-case */
import React, {  useEffect, useRef, useState } from 'react';
import style from './index.module.scss';
const 程序:React.FC<{name?:any}> = ({name}) => {
    return (
        <div className={style.app}>
            {name}
        </div>
    )
}
const 测试程序 = [
    {name:"1"},
    {name:"2"},
    {name:"3"},
    {name:"4"},
    {name:"5"},
    {name:"6"},
    {name:"7"},
    {name:"8"},
]
const 程序坞 = () => {
    const [apps,] = useState(测试程序)
    const dockref:any = useRef()
    useEffect(()=>{
        const dock:HTMLDivElement = dockref.current
        const applist:any = dock.querySelectorAll(`.${style.app}`) 
        const dockleft = dock.offsetLeft
        
        dock.onmouseenter = (e) => {
            console.log('进入');
            applist.forEach((app:HTMLDivElement) => {
                setTimeout(() => {
                    app.style.transition = 'all 0s ease'
                }, 10);
            })
            
        }

        dock.onmousemove = e => {
            const mousex = e.clientX - dockleft
            applist.forEach((app:HTMLDivElement) => { 
                
                const appcenter = app.offsetLeft + app.offsetWidth / 2
                const appgap = Math.abs(mousex-appcenter)
                // app.innerHTML = `gap:${appgap} size:${50 + 100 - appgap} top:${120 - appgap}`
                if(appgap<200){
                    // 尺寸 = 基础50 + 100/除以距离  越小越大
                    const size = 50 + 120 - appgap/1.5
                    const top = 120 - appgap/1.5
                    app.style.width =`${size}px` 
                    app.style.height = `${size}px` 
                    if(top>0){
                        app.style.top = `${-top}px`
                    }
                    
                }else{
                    app.style.width =`` 
                    app.style.height = `` 
                    app.style.top = ''
                }
                
            })

        }
        
        dock.onmouseleave = e => {
            applist.forEach((app:HTMLDivElement)=>{
                    app.style.width =`` 
                    app.style.height = `` 
                    app.style.top = ''
                    app.style.transition = ''
            })
        }
    },[apps])
    return (
        <div className={style.box} ref={dockref} >
            <div className={style.space}></div>
            
            {apps.map((app,index)=>(
                <程序 
                key={`applink${index}`} 
                name={app.name} 
                />
            ))}
            
        </div>
    )
}


export default 程序坞