/* eslint-disable react/jsx-pascal-case */
import { useRecoilValue } from 'recoil';
import { topbarState } from '../../store';
import style from './index.module.scss';
import { maintype } from './type';
import 默认状态栏 from './deafult';
const 操作: React.FC<{ name: string, click: () => void }> = ({ name, click }) => {
    return (
        <div className={style.option} onClick={click}>
            {name}
        </div>
    )
}

const 状态: React.FC<{ name: any, main: maintype }> = ({ name, main }) => {
    return (
        <div className={style.zt}>
            <div className={style.name}>{name}</div>
            <div className={style.options}>
                {main.map((item, index) => (
                    <操作 key={"操作" + index} name={item.name} click={item.click} />
                ))}
            </div>
        </div>
    )
}
const TopBar = () => {
    const isview = useRecoilValue(topbarState)

    return (
        <div className={style.box} style={!isview ? { top: "-50px" } : {}} >
            {
                默认状态栏.map((item, index) => (
                    <状态 key={"状态" + index} name={item.name} main={item.main} />
                ))
            }
        </div>
    )
}


export default TopBar