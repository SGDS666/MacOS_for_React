import style from './index.module.scss';
const DemoUi = () => {
    return (
        <div className={style.box} >
            topbar
        </div>
    )
}


export default function TopBar(){
    return (
        <DemoUi></DemoUi>
    )
}