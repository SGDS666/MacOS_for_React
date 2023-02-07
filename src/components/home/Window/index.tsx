import React from 'react';
import { useRecoilValue } from 'recoil';
import { WindowList } from '../../store/window';
import styles from './index.module.scss';
const Window = () => {
    const wlist = useRecoilValue(WindowList)
    return (
        <>
            {
                wlist.map(w => React.cloneElement(w.ele,{key:w.id}))
            }
        </>
    )
}


export default Window