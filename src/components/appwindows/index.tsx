import { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { appwinref } from '../../store';
import style from './index.module.scss';

const AppWindows = () => {
    const boxref :any= useRef()
    const setappwinref = useSetRecoilState(appwinref)
    useEffect(()=>{
        const box:HTMLDivElement = boxref.current
        setappwinref(box)
    },[setappwinref])
    return (
        <div className={style.box} ref={boxref}>
            appwindows
        </div>
    )
}


export default AppWindows