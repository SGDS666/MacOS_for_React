import { ContentChild } from '..';
import { useTheme } from '../../../../THEME';
import { appobj } from './apps';
import styles from './web.module.scss';
interface WebProps extends ContentChild {
    app:appobj
}
const WebApp:React.FC<WebProps> = ({app,set,clear}) => {
    const showTitle = app.showTitle === undefined ? true : false
    const t = useTheme()
    return (
        <>
        <div className={styles.white} 
        onMouseDown = {set}
        onMouseUp = {clear}
        style={{
            background:app.bcc??t.bcc,
            position:showTitle?"unset":"absolute",
            opacity:showTitle?"1":"0"}}></div>
        <iframe className={styles.webapp} src={app.url} title={app.name} style={{filter:t.iframeFilter}}>

        </iframe>
        </>
        
    )
}


export default WebApp