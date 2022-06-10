import React from 'react';
import { apptype } from '../../程序配置';
import style from './index.module.scss';
const IconUI:React.FC<apptype> = ({name,src,type,icon,left,bottom}) => {
    return (
        <div className={style.box} style={{left:`${left}px`,bottom:`${bottom}px`}} >
            <div className={style.icon}>
                <img src={icon} alt="" />
            </div>
            <div className={style.tip}>{name}</div>
        </div>
    )
}
const Icon:React.FC<apptype> = ({name,src,type,icon,left,bottom}) => {
    return (
        <IconUI name={name} src={src} type={type} icon={icon} left={left} bottom={bottom}/>
    )
}

export default Icon