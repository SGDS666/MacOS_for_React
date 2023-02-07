/* eslint-disable react/jsx-pascal-case */
import React, { ReactNode, useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { mouse } from '../../store/mouse';
import App from '../App';
import styles from './index.module.scss';
import 终端 from  '../../../image/终端.png'
import 启动台 from  '../../../image/启动台.png'
import 废纸篓空明 from  '../../../image/废纸篓空明.png'
import 系统偏好设置 from  '../../../image/系统偏好设置.png'
import 照片 from  '../../../image/照片.png'
import 活动监视器 from  '../../../image/活动监视器.png'
import appstore from  '../../../image/appstore.png'
import U终端 from '../content/Shell/终端';
import safari from '../../../image/safari.png'
import useMove from '../../../utils/addMove';
import { FUll } from '../../store/app';
import AppStore from '../content/AppStore/AppStore';
import Safari from '../content/Safari';
import Setting from '../content/Setting';
const DockUI: React.FC<{ children?: any }> = ({ children }) => {
    const setMouse = useSetRecoilState(mouse)
    const full = useRecoilValue(FUll)
    const dockref: any = useRef(null)
    const [change,setChange] = useState(true)
    useEffect(() => {
        const dock: HTMLDivElement = dockref.current

        
        dock.onmousemove = (e) => {
            if(change){
                const left = dock.offsetLeft
            
                setMouse([e.pageX - left, e.pageY])
            }
           
        }
        dock.onmouseleave = (e) => {
            if(change){
                setMouse([0, 0])
            }
            
        }
    }, [change, setMouse])
    return (
        <div
            ref={dockref}
            className={full?styles.outbox:styles.box}
        >
            <div className={styles.border}></div>
            {
                children.map((c:any,index:number)=>{
                    return React.cloneElement(c,{change,setChange,key:index})
                })
                
                
            }
        </div>
    )
}



const Dock = () => {
    
    return (
        <DockUI>
            <App bg={appstore} showFUll tip="应用商店"  width={1300} height={800}>
                   <AppStore/>
            </App>
            <App bg={启动台} tip="启动台"/>
            <App bg={系统偏好设置} tip="心情设置"  width={720} height={800}>
                <Setting/>
            </App>
            <App bg={safari} tip="浏览器" width={1500} height={900}>
                <Safari/>
            </App>
            <App bg={照片}  tip="照片"/>
            
            <App bg={活动监视器}  tip="张森的活动"/>
            <App bg={终端} showFUll showTitle tip="终端" width={800} height={500}>
                <U终端/>
            </App>
            <App bg={废纸篓空明}  tip="张森的废纸篓"/>
        </DockUI>

    )
}


export default Dock