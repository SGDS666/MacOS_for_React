import styles from './index.module.scss';
//@ts-ignore
import fscreen from 'fscreen'
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { WindowFullScreen } from '../../store/window';


const Menu: React.FC<{ pos: [number, number] }> = ({ pos }) => {
    const [fullScreen, SetFullSCreen] = useRecoilState(WindowFullScreen)
    return (
        <div className={styles.box} style={{ left: pos[0], top: pos[1] }}>
            <div className={styles.block}>
                <div className={styles.line}>新建文件夹</div>
                <div className={styles.border}></div>
            </div>







            <div className={styles.block}>
                <div className={styles.line} onClick={
                    () => {
                        if (!fullScreen) {
                            SetFullSCreen(true)
                            fscreen.requestFullscreen(document.body)

                        } else {
                            SetFullSCreen(false)
                            fscreen.exitFullscreen()

                        }
                    }
                }>{fullScreen ? "退出全屏" : "全屏(Safari卡住请点击重启)"}</div>
                <div className={styles.line}>关于本机</div>
                <div className={styles.line}>显示简介</div>

                <div className={styles.border}></div>
            </div>


            <div className={styles.block}>
                <div className={styles.line}>查看显示选项</div>
                <div className={styles.line} onClick={()=>{
                    window.location.reload()
                    }}>重启</div>
                
            </div>
        </div>
    )
}


export default Menu