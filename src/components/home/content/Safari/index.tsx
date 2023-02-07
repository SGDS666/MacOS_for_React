import { useEffect, useRef, useState } from 'react';
import { ContentChild } from '..';
import { useTheme } from '../../../../THEME';
import styles from './index.module.scss';
const Safari: React.FC<ContentChild> = ({ set, clear }) => {
   
    const [url, seturl] = useState("https://cn.bing.com/")
    const t = useTheme()
    return (
        <>
            
            <div className={styles.box} >

                <div className={styles.body}>
                    {/* <link rel='' href={url} /> */}
                    <iframe title='Safari'      src={url}  style={{filter:t.iframeFilter}}  onClick={(e)=>{
                        console.log(e);
                        e.stopPropagation()
                        e.preventDefault()
                        return false
                        
                    }} />
                       
                    
                </div>

            </div>
            <div className={styles.title} onMouseDown={(e) => {
                set!(e)
                e.stopPropagation()
                }} onMouseUp={e => clear!()}>
                <div className={styles.center} onMouseDown={e=>e.stopPropagation()} >

                    <input type="text" placeholder='可直接搜索内容或输入http...网址' defaultValue={url} onFocus={e => {
                        setTimeout(() => {
                            const value = e.target.value
                            e.target.setSelectionRange(0, value.length)
                        }, 200);


                    }}
                        onKeyDown={(e: any) => {
                            console.log(e);

                            if (e.key === "Enter") {
                                if(e.target.value.includes("www")&&(e.target.value.includes("http")===false)){
                                    e.target.value = `https://${e.target.value}`
                                    seturl(`https://${e.target.value}`)
                                    return
                                }
                                if(e.target.value.includes("http")||e.target.value.includes("https")){
                                    seturl(e.target.value)
                                    return
                                }

                                
                                    seturl(`http://www.bing.com/search?q=${e.target.value}`)
                                
                                
                            }
                        }}
                    />
                </div>
            </div>
        </>

    )
}


export default Safari