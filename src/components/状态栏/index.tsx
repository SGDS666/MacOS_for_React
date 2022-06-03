/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import style from './index.module.scss';
import { maintype } from './type';

const 操作:React.FC<{name:string,click:()=>void}> = ({name,click}) => {
    return (
        <div className={style.option} onClick={click}>
            {name}
        </div>
    )
}

const 状态:React.FC<{name:any,main:maintype}> = ({name,main}) => {
    return (
        <div className={style.zt}>
            <div className={style.name}>{name}</div>
            <div className={style.options}>
                {main.map((item,index )=> (
                    <操作 key={"操作"+index} name={item.name} click={item.click}/>
                ))}
            </div>
        </div>
    )
}
const 默认状态栏 = [
    {
        name:'访达',
        main:[
            {name:"关于访达",click:()=>console.log('访达')},
            {name:"偏好设置",click:()=>console.log('偏好设置')},
            {name:"文件操作",click:()=>console.log('文件操作')},
            {name:"新建窗口",click:()=>console.log('新建窗口')},
            {name:"拷贝",click:()=>console.log('拷贝')}
        ]
    },
    {
        name:'帮助',
        main:[
            {name:"macos帮助",click:()=>console.log('macos帮助')},
            {name:"查看新功能",click:()=>console.log('查看新功能')},
            {name:"了解基础知识",click:()=>console.log('了解基础知识')},
        ]
    }
]

const 状态栏 = () => {
    return (
        <div className={style.box} >
            {
                默认状态栏.map((item,index )=> (
                    <状态 key={"状态"+index} name={item.name} main={item.main} />
                ))
            }
        </div>
    )
}


export default 状态栏