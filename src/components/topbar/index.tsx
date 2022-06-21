import { useRecoilValue } from 'recoil';
import { topbarState } from '../../store';
import style from './index.module.scss';
const TopBar = () => {
    const isview = useRecoilValue(topbarState)
    
    return (
        <div className={style.box} style={!isview?{top:"-50px"}:{}} >
            topbar
        </div>
    )
}


export default TopBar