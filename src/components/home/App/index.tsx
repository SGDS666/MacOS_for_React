
import React, { ReactNode, useCallback, useMemo } from 'react';
import { useEffect, useRef, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { opencontent } from '../../store/app';
import { mouse } from '../../store/mouse';
import { WindowList } from '../../store/window';
import Content from '../content';
import styles from './index.module.scss';
export interface AppProp {
    children?: ReactNode,
    print?: boolean,
    bg: string,
    tip: string,
    content?: ReactNode,
    showTitle?: boolean | undefined
    click?: () => void,
    width?: number,
    height?: number,
    change?: boolean,
    setChange?: (b: boolean) => void,
    showFUll?: boolean | undefined
}
const baseMargin = 8
const MenuItem: React.FC<{ name: string, click: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void }> = ({ name, click }) => {
    return (
        <div onClick={
            e => {
                e.stopPropagation()
                click(e)
            }
        }>{name}</div>
    )
}
const AppUi: React.FC<AppProp> = ({  print, bg, tip, click,  setChange }) => {
    const [mousex,] = useRecoilValue(mouse)
    const [initX, setInitX] = useState(0)
    const [width, setWidth] = useState(0)
    const [showTip2, setTip2] = useState(false)
    const ref: any = useRef()
    const { scale, transition } = useMemo(() => {
        let scale = 1, newMargin, transition;
        transition = "all 0s "
        if (initX === 0 || mousex === 0) {
            return { gapX: null, scale, newMargin }
        }

        const gapX = Math.abs(mousex - (initX + (width / 2)))

        if (gapX <= 240) {

            const addscale = (40 - gapX / 6) * 0.01
            scale += addscale
            if (print) {
                console.log(scale);
            }


        } else {
            scale = 1
            transition = "all 0.3s ease"
        }
        return { gapX, scale, transition }
    }, [initX, print, mousex, width])
    useEffect(() => {
        const app: HTMLDivElement = ref.current
        setInitX(app.offsetLeft)
        setWidth(app.offsetWidth)
        app.onmousemove = () => {
            setInitX(app.offsetLeft)
            setWidth(app.offsetWidth)
        }
    }, [])
    const closd = useCallback(() => {
        setTip2(false)
        setChange?.(true)
    }, [setChange])

    return (
        <>

            <div
                className={styles.box}
                onClick={(e) => {
                    click?.()
                    e.stopPropagation()
                    e.preventDefault()

                }}
                style={{
                    // transform:`translateX(${scale}px) `,
                    width: `${scale * 50}px`,
                    height: `${scale * 50}px`,
                    margin: `0 ${baseMargin}px`,
                    transition: transition,
                    backgroundImage: `url(${bg})`
                }}
                ref={ref}
                onContextMenu={e => {
                    e.preventDefault()
                    e.stopPropagation()
                    setTip2(true)
                    setChange?.(false)
                }}

            >


                {!showTip2 && <div className={styles.tip}>
                    {tip}
                </div>}
                <div className={styles.tip2} style={showTip2 ? { display: "flex" } : {}}>

                    <MenuItem name='从程序坞移除' click={(e) => { closd() }} />
                    <MenuItem name='取消操作' click={(e) => {
                        closd()
                    }} />

                </div>
                {showTip2 && <div className='zz' onClick={
                    e => {
                        e.stopPropagation()
                        e.preventDefault()
                        closd()

                    }
                }
                    onContextMenu={
                        e => {
                            e.stopPropagation()
                            e.preventDefault()
                            closd()
                        }
                    }
                ></div>}
            </div>

        </>

    )


}

const App: React.FC<AppProp> = (props) => {
  
    const setContent = useSetRecoilState(opencontent)
    const setWindowList = useSetRecoilState(WindowList)
    const click = useCallback(() => {
        
            setContent(c => c + 1)
            setWindowList(l => {
                for(let i of l){
                    if(i.id === props.tip){
                        return l
                    }
                }
                return [
                    ...l,
                    {
                        id: props.tip,
                        ele: <Content

                            {...props}
                            // icon={props.bg}
                            // title={props.tip}
                            // width={props.width}
                            // height={props.height}
                            
                        >
                            {props.children}

                        </Content>,
                        props,
                    }, 
                    
                ]

            })
        

    },[props, setContent, setWindowList])
    return (
        <>
            <AppUi {...props} click={click}>

            </AppUi>
        </>
    )
}

export default App