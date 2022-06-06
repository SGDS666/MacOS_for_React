import React, { useEffect, useMemo, useRef } from 'react';
import style from './index.module.scss';

export const WebContent:React.FC<{src:string,title:string}> = ({src,title}) => {
    const id = useMemo(()=>`${Math.random()}` , [])
    
    return (
        <div className={style.webbox}  >
            <iframe 
            onLoad={(e)=>{
                // const iframe  = e.target as HTMLIFrameElement
               
                
                
                
            }}
            id={id} 
            width={"100%"} 
            height={"100%"} 
            src={src} 
            title={title}>

            </iframe>
        </div>
    )
}


