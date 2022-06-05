/* eslint-disable react/jsx-pascal-case */
import { useRecoilValue } from 'recoil';
import './App.scss';
import 状态栏 from './components/状态栏';
import 程序坞 from './components/程序坞';
import 窗口 from './components/窗口';
import { 状态栏显示 } from './store';
function App() {
  const 状态显示 = useRecoilValue(状态栏显示)
  return (
    <div className="screen">
      {状态显示?<状态栏/>:null}
      <窗口/>
      <程序坞/>
    </div>
  );
}

export default App;
