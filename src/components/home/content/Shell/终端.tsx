import { useEffect, useMemo, useRef } from 'react';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useTheme } from '../../../../THEME';
import { FUll } from '../../../store/app';
import { checkCode } from '../Shell/code';
import styles from './zd.module.scss';
const Line: React.FC<{ value?: any, disable?: boolean, onchange?: (e: any) => void }> = ({ value, disable = true, onchange }) => {
    const isString = typeof value === "string"
    const t = useTheme()
    return (
        <div className={styles.line} >
            
            {!disable&&<div >zhangsen@bogon ~ % </div>}
            {isString&&value?.includes("title")&&<div >zhangsen@bogon ~ % </div>}
            {!disable&&isString && <><input style={{color:t.color}} type="text" value={value} onChange={onchange} /></>}
            {disable &&isString&& <p>{value?.includes("title")?value.substring(5):value}</p>}
            {!isString&&value}
        </div>
    )
}


const U终端 = () => {
    const [lines, setlines] = useState([
        "作者:张森",
        "出生日期:1998/05/26",
        "联系方式:17625995526(微信同) qq:1226931269 邮箱:1226931269@qq.com",
        "前端框架:React18",
        "组件及动画:scss纯手撸",
        "状态管理:recoil ",
        "仓库地址:https://gitee.com/wdppx/macos",
        
        <p>如果你使用的ie浏览器且只能看到终端页面 这是正常的 请换成<a href='https://www.google.cn/intl/zh-CN/chrome/'>chrome</a>或<a href='https://www.microsoft.com/zh-cn/edge/download?form=MA13FJ'>Edge</a>浏览器打开此页面</p>,
        "safari浏览器全屏模式下会出现异常bug 请不要进入"

    ])
    const t = useTheme()
    const [value, setValue] = useState("")
    const time = useMemo(() => new Date().toLocaleString(), [])
    const fullstate = useRecoilValue(FUll)
    const ref:any = useRef()
    const keyDown = (e: any) => {
        if (e.key === "Enter") {
            checkCode(setlines, setValue, value)
        }
    }

    useEffect(() => {
        ref.current.scrollTop = ref.current.scrollHeight;
    },[lines,value]);
    return (
        <div className={styles.box} onKeyDown={keyDown}  style={{background:t.bcc2,color:t.color2}}>
            <div className={styles.body} 
            style={{background:t.bcc2,color:t.color}} ref={ref}>
                <p>login: {time}</p>

                {
                    lines.map((t, i) => <Line value={t} key={i} disable={true} />)
                }
                <Line value={value} onchange={
                    (e) => {
                        setValue(v => {

                            return e.target.value

                        })
                    }}
                    disable={false} />
            </div>
        </div>
    )
}


export default U终端