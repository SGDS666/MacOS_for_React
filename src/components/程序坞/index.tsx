/* eslint-disable react/jsx-pascal-case */
import React, {  useEffect, useRef, useState } from 'react';
import style from './index.module.scss';
import { 默认程序 } from './程序配置';

const 程序:React.FC<{name?:any,icon:string}> = ({name,icon}) => {
    return (
        <div className={style.app}>
            <div className={style.icon}>
                <img src={icon} alt={""} />
                <div className={style.tip}>{name}</div>
            </div>
        </div>
    )
}

const 程序坞 = () => {
    const [apps,] = useState(默认程序)
    const dockref:any = useRef()
    useEffect(()=>{
        const dock:HTMLDivElement = dockref.current
        const applist:any = dock.querySelectorAll(`.${style.app}`) 
        const dockleft = dock.offsetLeft
        
        dock.onmouseenter = (e) => {
            console.log('进入');
            applist.forEach((app:HTMLDivElement) => {
                setTimeout(() => {
                    app.style.transition = 'all 0s '
                }, 300);
            })
            
        }

        dock.onmousemove = e => {
            const mousex = e.clientX - dockleft
            applist.forEach((app:HTMLDivElement) => { 
                
                const appcenter = app.offsetLeft + app.offsetWidth / 2
                const appgap = Math.abs(mousex-appcenter)
                // app.innerHTML = `gap:${appgap} size:${50 + 100 - appgap} top:${120 - appgap}`
                if(appgap<300){
                    // 尺寸 = 基础50 + 100/除以距离  越小越大
                    const size = 50 + 120 - appgap/1.3
                    const top = 100 - appgap/1.4

                    if(size>=50){
                        app.style.width = `${size}px`
                        app.style.height = `${size}px`
                    }
                    // app.style.left = `${left}px`
                    // if(scale>1){
                    //     app.style.transform = `scale(${size*0.018})`
                    // }
                    if(top>=0){
                        app.style.top = `${-top}px`
                        
                    }
                    
                }else{
                    app.style.width = ''
                    app.style.height = ''
                    app.style.top = ''
                    app.style.margin = ``
                    app.style.transform = ''
                    app.style.left = ''
                }
                
            })

        }
        
        dock.onmouseleave = e => {
            applist.forEach((app:HTMLDivElement)=>{
                    app.style.top = ''
                    app.style.width = ''
                    app.style.height = ''
                    setTimeout(() => {
                        app.style.transition = ' '
                    }, 300);
                    app.style.margin = ``
                    // app.style.transform = ''
                    
                    
            })
        }
    },[apps])
    return (
        <div className={style.box} ref={dockref} >
            <div className={style.space}></div>
            <div className={style.apps}>
                {apps.map((app,index)=>(
                    <程序 
                    key={`applink${index}`} 
                    name={app.name} 
                    icon={app.icon}
                    />
                ))}
            </div>
            
            
        </div>
    )
}


export default 程序坞