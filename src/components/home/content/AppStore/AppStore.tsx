/* eslint-disable react/jsx-pascal-case */
import styles from './appstore.module.scss';
import 探索 from '../../../../image/探索.png'
// import 创作 from '../../../../image/创作.png'
// import 工作 from '../../../../image/工作.png'
// import 游戏 from '../../../../image/游戏.png'
import left from '../../../../image/toleft.png'
import right from '../../../../image/toright.png'
import React, { useCallback, useMemo, useState } from 'react';
import Content, { ContentChild } from '..';


import { appobj, apps, 创作者的小欢喜, 前端仔的新手村, 摸鱼时的小确幸 } from './apps';
import { card, cards, Top, TopObj, tsCards } from './cards';
import WebApp from './WebApp';
import { useTheme } from '../../../../THEME';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { WindowList } from '../../../store/window';


interface BlockProps {
    children: any,
    pages?: number,
    pageIndex?: number,
    title?: string
}
const Block: React.FC<BlockProps> = ({ children, pageIndex, pages, title }) => {
    const t = useTheme()
    return (
        <div className={styles.tjs}>
            {title && <div className={styles.recap} style={{ borderColor: t.bcc4 }}>{title}</div>}
            {children}
            <div className={styles.toleft} style={{ backgroundImage: `url(${left})` }}></div>
            <div className={styles.toright} style={{ backgroundImage: `url(${right})` }}></div>
        </div>
    )
}
interface AppStoreChlid {
    onScroll?: React.UIEventHandler<HTMLDivElement>
}
const TImg: React.FC<{ topobj: Top, onclick?: any }> = ({ topobj, onclick }) => {
    return (
        <div className={styles.T} onClick={onclick}>
            <div className={styles.timg}>
                <img src={topobj.img} alt="null" />
                <div className={styles.imginfo}>
                    <div>
                        <h6>
                            {topobj.name}
                        </h6>
                        <h2>{topobj.reason}</h2>
                    </div>
                    <h5>{topobj.introduce}</h5>
                </div>
            </div>
        </div>
    )
}
const Card: React.FC<{ data: card, onclick?: any }> = ({ data, onclick }) => {
    const { info, img } = data
    const t = useTheme()
    return (
        <div className={styles.card} onClick={onclick}>
            <div className={styles.tj} style={{ background: t.bcc2, color: t.color }} >
                <div className={styles.info}>
                    <p>{info[0]}</p>
                    <h2>{info[1]}</h2>
                    <h5>{info[2]}</h5>
                </div>
                <div className={styles.logo}>
                    <img src={img} alt="null" />
                </div>
            </div>
        </div>
    )
}
const Cards: React.FC<{ data: cards }> = ({ data }) => {
    return (
        <>
            {
                data.map((crad, index) => {
                    return (
                        <Open
                            app={crad}
                            key={index}
                            target={
                                <Card data={crad} />
                            }
                        />

                    )
                })
            }
        </>
    )

}
const Open: React.FC<{ app: appobj, target: any }> = ({ app, target }) => {
    const setWindowList = useSetRecoilState(WindowList)
    // const [appState,setAppState] = useRecoilState(AppState)
    // const [open,setOpen] = useMemo(()=>{
    //         const appName = app.name
    //         let open:boolean
    //         try { //第一次获取状态 没有则添加
    //             open = appState[appName]
    //         } catch (error) {
    //             open = false
    //         }
    //         const setOpen = (b:boolean) => {
    //             setAppState(s=>({...s,[appName]:b}))
    //         }
    //         return [open,setOpen]
    // },[app.name, appState, setAppState])
    return (
        <>

            {
                React.cloneElement(
                    target,
                    {
                        onclick: (e: any) => setWindowList(w => {
                            for(let i of w){
                                if(i.id === app.name){
                                    return w
                                }
                            }
                            return [...w,
                                {
                                    id: app.name,
                                    ele: <Content
                                        showTitle={app.showTitle??true}
                                        showFUll={app.showFull??true}
                                        tip={app.name}
                                        width={app.size?.[0] ?? 1200}
                                        height={app.size?.[1] ?? 1000}
                                    >
                                        <WebApp app={app} />
                                    </Content>
                                }, ]
                        }
                        )
                    })}

        </>
    )
}
const Start: React.FC<{ clickName?: string, onclick?: any }> = ({ clickName, onclick }) => {
    return (
        <div className={styles.link} onClick={onclick}  >
            {clickName ?? "学习"}
        </div>
    )
}
const Apps: React.FC<{ data: apps, clickName?: string }> = ({ data, clickName }) => {
    const t = useTheme()
    return (
        <div className={styles.apps}>
            {data.map((block, index) => {
                return (
                    <div className={styles.appblock} key={index}>
                        {
                            block.map((app, index) => {
                                return (
                                    <div className={styles.app} key={index} style={{ color: t.color }}>
                                        <div className={styles.icon}>
                                            <img src={app.img} alt="null" />
                                        </div>
                                        <div className={styles.main} style={{ borderColor: t.bcc4 }}>
                                            <div className={styles.name} style={{ color: t.color }}>{app.name}</div>
                                            <div className={styles.introduce}>{app.introduce}</div>
                                        </div>
                                        <Open

                                            app={app}
                                            target={
                                                <Start clickName={clickName} />

                                            }
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            })}
        </div>
    )
}
const 探索UI: React.FC<AppStoreChlid> = ({ onScroll }) => {
    return (
        <div className={styles.ts} onScroll={onScroll}>
            <Open target={<TImg topobj={TopObj} />} app={TopObj} />
            {/* <TImg /> */}

            <Block>
                <Cards data={tsCards} />
            </Block>

            <Block title='前端仔的新手村'>
                <Apps data={前端仔的新手村} />
            </Block>
            <Block title='打工人的小欢喜'>
                <Apps data={创作者的小欢喜} clickName="使用" />
            </Block>
            <Block title='摸鱼时的小确幸'>
                <Apps data={摸鱼时的小确幸} clickName="游玩" />
            </Block>



            <div className={styles.other}>

            </div>
        </div>
    )
}
interface appStoreProp extends ContentChild {

}
const AppStore: React.FC<appStoreProp> = ({ clear, set }) => {


    const [check, setCheck] = useState<"探索" | "创作" | "工作" | "游戏">("探索")
    const [tstyle, setTstyle] = useState({})
    const t = useTheme()
    const getcheckStyle = (key: string) => {
        if (key === check) {
            return {
                backgroundColor: t.bcc4,
                color: t.color
            }
        }
        return {}
    }

    return (
        <div className={styles.box} >
            <div className={styles.checks} style={{ background: t.bcc }} >
                <div className={styles.check} style={getcheckStyle("探索")} onClick={() => setCheck("探索")}>
                    <img src={探索} alt=""></img>探索
                </div>
                {/* <div className={styles.check} style={getcheckStyle("创作")} onClick={() => setCheck("创作")}>
                    <img src={创作} alt=""></img>创作
                </div>
                <div className={styles.check} style={getcheckStyle("工作")} onClick={() => setCheck("工作")}>
                    <img src={工作} alt=""></img>工作
                </div>
                <div className={styles.check} style={getcheckStyle("游戏")} onClick={() => setCheck("游戏")}>
                    <img src={游戏} alt=""></img>游戏
                </div> */}
            </div>
            <div className={styles.body} style={{ background: t.bcc$, color: t.color }}>
                <div className={styles.title} style={{ background: t.bcc$, color: t.color }} onMouseDown={e => set!(e)} onMouseUp={e => clear!()} >{check}</div>
                {check === "探索" && <探索UI />}
            </div>
        </div>
    )
}


export default AppStore