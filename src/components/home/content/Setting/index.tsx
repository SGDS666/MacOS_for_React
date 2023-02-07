/* eslint-disable react/jsx-pascal-case */
import styles from './index.module.scss';
import test from '../../../../image/seticon/WI-Fi.png'
import { config } from './config';
import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Select } from '../../../store/set';
import 外观 from './外观';
import { ContentChild } from '..';
import { Theme, useColor, useTheme } from '../../../../THEME';
import { THEME } from '../../../store/Theme';
interface BlockProps {
    config: {
        type: string;
        child: {
            name: string;
            icon: any;
        }[]
    },
    select?:string
    setSelect?:(s:string)=>void


}
const Block: React.FC<BlockProps> = ({ config,select,setSelect }) => {
    const { child } = config
    const [,color] = useColor()
    const SelectStyle:React.CSSProperties = {background:color,color:"white"}
    return (
        <div className={styles.block}>
            {
                child.map((item, index) => {
                    if (item.name === "user") {
                        return (
                            <div className={styles.user} key={index} style={select===item.name?SelectStyle:{}} onClick={()=>setSelect!(item.name)}>
                                <div className={styles.icon} style={{backgroundImage:`url(${item.icon})`}} />
                                <div className={styles.info}>
                                    <div>张森</div>
                                    <span>Apple ID</span>
                                </div>

                            </div>
                        )
                    }
                    return (
                        <div className={styles.item} style={select===item.name?SelectStyle:{}} onClick={()=>setSelect!(item.name)} key={index} >
                            <img src={item.icon} alt="no" />
                            <p>{item.name}</p>

                        </div>
                    )
                })
            }
        </div>
    )
}
const Options = () => {
    const [select,setSelect] = useRecoilState(Select)
    return (
        <div className={styles.options}>
            {
                config.map((b,index) =>{
                    return (
                        React.cloneElement( <Block config={b} />,{select,setSelect,key:index})
                    )
                })
            }
        </div>
    )
}
const SettingMain:{[key:string]:JSX.Element} = {
    "外观":<外观/>
}
const Setting:React.FC<ContentChild> = ({set,clear}) => {
    const select = useRecoilValue(Select)
    const t = useTheme()
    return (
        <div className={styles.box} >
            <div className={styles.left} style={{background:t.bcc,color:t.color}}>
                <div className={styles.search}>
                    <input type="search" placeholder="搜索" />
                </div>
                <Options />
            </div>
            <div className={styles.right} style={{background:t.bcc$,color:t.color}}>
                {SettingMain[select]&&React.cloneElement(SettingMain[select],{set,clear}) }
            </div>
        </div>
    )
}


export default Setting