import { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { appwinref,  movewinState } from '../../store';
import style from './index.module.scss';

const AppWindows = () => {
    const boxref :any= useRef()
    const setmovewin = useSetRecoilState(movewinState)
    // const [movewin,setmovewin] = useRecoilState(movewinState)
    // const mouse = useRecoilValue(mouseState)
    const setappwinref = useSetRecoilState(appwinref)
    
    useEffect(()=>{
        const box:HTMLDivElement = boxref.current
        setappwinref(box)
    },[setappwinref])

    return (
        <div 
        className={style.box} 
        ref={boxref} 
        onMouseUp={
            () => {
                setmovewin({id:"",dx:0,dy:0,wleft:0,wtop:0})
            }
        }
        >
            
        </div>
    )
}


export default AppWindows