/* eslint-disable react/jsx-pascal-case */
import { useRecoilValue } from 'recoil';
import './App.scss';
import 状态栏 from './components/状态栏';
import 程序坞 from './components/程序坞';
import 窗口 from './components/窗口';
import { WebContent } from './components/内容';
import { 状态栏显示 } from './store';
export const 备用 = () =>
(
  <div>
    {/* <WebContent src='https://www.pdfpai.com/' title='pdf工具'/> */}
    {/* <WebContent src='https://webgradients.com/?ref=usniemvuilaptrinh' title='渐变配色'/> */}
    {/* <WebContent src='https://animista.net/?ref=usniemvuilaptrinh' title='css动画'/> */}
    {/* <WebContent src='https://beecut.cn/online-video-editor' title='云剪辑'/> */}
  </div>

)
function App() {
  const 状态显示 = useRecoilValue(状态栏显示)
  return (
    <div className="screen">
      {状态显示 ? <状态栏 /> : null}
      <窗口>
        <WebContent src='https://ps.gaoding.com/#/' title='ps' />
      </窗口>
      <窗口>
        <WebContent src='https://flash.zczc.cz/' title='经典游戏' />
      </窗口>
      <窗口>
        <WebContent src='https://www.pdfpai.com/' title='pdf工具' />
      </窗口>
      <窗口>
        <WebContent src='https://weread.qq.com/' title='微信读书' />
      </窗口>
      <窗口>
        <WebContent src='http://hexgl.bkcore.com/play/' title='赛车游戏' />
      </窗口>
      <程序坞 />
      
    </div>
  );
}

export default App;
