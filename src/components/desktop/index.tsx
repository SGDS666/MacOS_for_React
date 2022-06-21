import style from './index.module.scss';
import ventura from '../../image/壁纸.jpeg'
const DemoUi = () => {
    return (
        <div className={style.box} style={{backgroundImage:`url(${ventura}`}} >
            desktop
        </div>
    )
}


export default function DeskTop(){
    return (
        <DemoUi></DemoUi>
    )
}