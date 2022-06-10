import React from 'react';
import { applist,默认程序 } from '../../程序配置';
import style from './index.module.scss';
import Icon from '../应用图标';
const DockUi: React.FC<{ applist: applist }> = ({ applist }) => {
    const appcount = applist.length
    const dockwidth = appcount * 80

    return (
        <div className={style.box} style={{width:`${dockwidth}px`}}>
            <div className={style.dock}>
                <div className={style.apps}>
                    {applist.map((app,index)=>{
                        return (
                        <Icon 
                        left={index*80}
                        bottom={0}
                        key={app.name} 
                        icon={app.icon} 
                        name={app.name} 
                        type={app.type}/>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}


export default function Dock() {
    return (
        <DockUi applist={默认程序}/>

        
    )
}