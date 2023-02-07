import styles from './index.module.scss';
import bg from '../../image/壁纸.jpg'
import bg2 from '../../image/壁纸2.jpg'
import bg3 from '../../image/壁纸3.jpg'
import bg4 from '../../image/壁纸4.jpeg'
import bg5 from '../../image/壁纸5.jpg'
import d from '../../image/Dark.jpg'
import l from '../../image/Light.jpg'
import Dock from './dock';
import { useRecoilValue } from 'recoil';
import { FUll, opencontent } from '../store/app';
import { THEME } from '../store/Theme';
import Window from './Window';
const Home = () => {
    const openC = useRecoilValue(opencontent)
    const f = useRecoilValue(FUll)
    const theme = useRecoilValue(THEME)
    const GetIMG = () => {
        switch (theme) {
            case "亮":
                return l
        
            case "暗":
                return d
            case "自动":
                if(new Date().getHours()>=17||new Date().getHours()<=6){
                    return d
                }
                else{
                    return l
                }
        }
    }
    return (
        <>
            <div
                className={styles.box}
                style={
                    {
                        backgroundImage: `url(${GetIMG()})`,
                        backgroundSize: `${openC > 0 ? "110%" : "100%"}`,
                        left:f?"-100vw":"0"

                    }

                } >

            </div>
            <Dock />
            <Window/>
        </>

    )
}


export default Home