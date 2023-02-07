
import { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import './progress.scss'
import bz from '../../image/Light.jpg'
import bz2 from '../../image/Dark.jpg'
import { checkBrowser, checkMobile, needDowlond } from '../../utils/check';
//@ts-ignore
// import start from '../../../public/start.m4a'
// console.log(start);
const StartPlay = () => {
    const newa = new Audio('/macos/start.m4a')
    newa.play()
}
const createZw = (e: any) => {
    if (Math.random() > 0.8) {
        const t2: HTMLDivElement = e.target
        const zw = document.createElement("img")
        zw.src = "/macos/zw.png"
        zw.className = styles.zw
        // console.log(e);

        zw.onload = () => {

            const vw = document.body.offsetWidth
            const vh = document.body.offsetHeight
            const left = (vw - 900) / 2
            const top = (vh - 630) / 2
            const random = Math.round(Math.random() * 30 + 10)
            zw.style.width = random + "px"
            zw.style.height = random + "px"
            zw.style.rotate = `${Math.random() * 360}deg`
            zw.style.opacity = `${Math.random()}`
            zw.style.left = `${e.pageX - left - (random / 2)}px `
            zw.style.top = `${e.pageY - top - (random / 2)}px`
            t2.appendChild(zw)
            setTimeout(() => {
                t2.removeChild(zw)
            }, 2000);
        }
    }


}
const Open: React.FC<{ open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }> =
    ({ open, setOpen }) => {
        const [start, setStart] = useState(false)
        const pref: any = useRef()
        const [count, setCount] = useState(0)
        const [ pending,setPending] = useState(true)
        useEffect(() => {
            console.log(checkBrowser())
            if (start) {
                const p: HTMLDivElement = pref.current
                const img1 = new Image()
                img1.src = bz


                const img2 = new Image()
                img2.src = bz2
                img1.onload = () => {

                    if (p) {

                        setCount(n => n+1)
                    }

                }
                img2.onload = () => {

                    if (p) {
                        setCount(n => n+1)
                    }

                }


                setTimeout(() => {
                    setPending(false)
                }, 4000);
            }

        }, [setOpen, start])
        useEffect(()=>{
            if(count>1&&!pending){
                setOpen(false)
            }
        },[pending, count, setOpen])
        if (!open) {
            return null
        }

        return (
            <div className={!start ? styles.mac : styles.macopen}>

                
                <div className={styles.top} >
                    {!start && <p className={styles.ttip}>该mac已被主人加密 需要进行暴力破解</p>}
                    {!start && <div className={styles.btn} onClick={() => {
                        setStart(true)
                        StartPlay()
                    }}>开始暴力破解</div>}
                    <div className={styles.t1} ></div>
                    <div className={styles.t2} onMouseMove={!start ? createZw : () => { }}>
                        {start && <div className={styles.box} >

                            <div>
                                <img src="/macos/apple.png" alt="" />
                            </div>
                            <div>
                                <p ref={pref}>正在启动中..(第一次打开请等待加载资源)</p>
                                <div className="pbox">
                                    <div className='progress'></div>
                                </div>
                            </div>


                        </div>}
                    </div>
                    <div className={styles.t3}></div>
                </div>


                <div className={styles.bottom}>

                </div>
               {needDowlond()&&!start&&<div className={styles.warn}>
                    当前浏览器版本太低 请使用最新版chrome浏览器打开,否则大部分功能无法使用
                    <a href='https://www.google.cn/intl/zh-CN/chrome/' target="_blank" rel="noreferrer">下载最新版chrome</a>
                </div>}
                {
                   (!checkMobile()&& checkBrowser()==="Safari"&&!start)&&<div  className={styles.safari}>
                    Safari 点击窗口全屏会出现严重bug 无法体验本项目 目前建议使用最新版chrome浏览器打开
                    <a href='https://www.google.cn/intl/zh-CN/chrome/' target="_blank" rel="noreferrer">下载最新版chrome</a>
                </div>
                }
                {
                    checkMobile()&&<div  className={styles.mobile}>
                    移动端未做触摸事件处理 使用体验不佳 请务必使用桌面端最新版chrome浏览器打开
                    <a href='https://www.google.cn/intl/zh-CN/chrome/' target="_blank" rel="noreferrer">下载最新版chrome</a>
                    </div>
                }
            </div>
        )
    }





export default Open