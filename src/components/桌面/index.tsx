import style from './index.module.scss';
const DemoUi = () => {
    return (
        <div className={style.box} >
            demo
        </div>
    )
}


export default function Demo(){
    return (
        <DemoUi></DemoUi>
    )
}