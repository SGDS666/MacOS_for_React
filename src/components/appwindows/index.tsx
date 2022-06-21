import style from './index.module.scss';
import ventura from '../../image/壁纸.jpeg'
const DemoUi = () => {
    return (
        <div className={style.box} style={{backgroundImage:`url(${ventura}`}}>
            appwindows
        </div>
    )
}


export default function AppWindows(){
    return (
        <DemoUi></DemoUi>
    )
}