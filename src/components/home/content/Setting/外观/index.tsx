import { useRecoilState } from 'recoil';
import { ContentChild } from '../..';
import {  C, COLOR, useColor, useTheme, 强调色 } from '../../../../../THEME';
import { THEME } from '../../../../store/Theme';
import styles from './index.module.scss';
export const AreaItem:React.FC<{children:any,itemName:string}> =  ({itemName,children}) => {
    const t = useTheme()
    return (
        <div className={styles.AreaItem} style={{borderColor:t.bcc4}} >
                    <div className={styles.itemname}>{itemName}</div>
                    <div className={styles.itemMain}>{children}</div>
                </div>
    )
}
export const SetArea:React.FC<{children:any}> = ({children}) => {
    const t = useTheme()
    return (
        <div className={styles.setArea}style={{background:t.bcc2,boxShadow:`0px 0px 2px 1px ${t.bcc4}`}}>
                {children}
        </div>
    )
}
export const SetBody:React.FC<{set?:any,clear?:any,children:any,name:string,}>  = ({children,name,set,clear}) => {
    
    return (
        <div className={styles.box}>
            <div className={styles.title} onMouseDown={set} onMouseUp={clear}>{name}</div>
            
                {children}
            
            
        </div>
        )
}

const Color:React.FC<{Cname:keyof 强调色}> = ({Cname}) => {
    const [color,setColor] = useRecoilState(C)
    return (
    <div className={styles.color} onClick={()=>setColor(Cname)}>
        <div className={color===Cname?styles.cc:styles.c} style={{backgroundColor:COLOR[Cname]}}></div>
        {color===Cname&&<div className={styles.tip} >{Cname}</div>}
    </div>
    )
}
const Colors = () => {
    return (
        <div className={styles.colors}>
            <Color Cname="蓝色"/>
            <Color Cname="紫色"/>
            <Color Cname="粉色"/>
            <Color Cname="红色"/>
            <Color Cname="橙色"/>
            <Color Cname="黄色"/>
            <Color Cname="绿色"/>
            <Color Cname="石墨色"/>
        </div>
    )
}
const 外观:React.FC<ContentChild >= (props) => {
    const [theme,setTheme] = useRecoilState(THEME)
    const [,color] = useColor()
    const choiceTheme:React.CSSProperties =  {outline:`4px solid ${color}`}
    return (
        <SetBody {...props} name="外观" >
            <SetArea >
                <AreaItem itemName='外观'>
                <div  className={styles.ThemeBox} >
                    <div className={styles.theme} onClick={()=>setTheme("亮")}>
                        <img style={theme==="亮"?choiceTheme:{}} src={require('../../../../../image/亮色.png')} alt="no" />
                        <div className={styles.name}>浅色</div>
                    </div>
                    <div className={styles.theme} onClick={()=>setTheme("暗")}>
                        <img style={theme==="暗"?choiceTheme:{}} src={require('../../../../../image/暗色.png')} alt="no" />
                        <div className={styles.name}>深色</div>
                    </div>
                    <div className={styles.theme} onClick={()=>setTheme("自动")}>
                        <img style={theme==="自动" ?choiceTheme:{}} src={require('../../../../../image/自动.png')} alt="no" />
                        <div className={styles.name}>自动</div>
                    </div>
                </div>
                </AreaItem>
                <AreaItem itemName="强调色">
                        <Colors/>
                </AreaItem>
                
            </SetArea>
            <SetArea >

            </SetArea>
        </SetBody>
    )
}


export default 外观