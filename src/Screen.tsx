/* eslint-disable react/jsx-pascal-case */

// import { useState } from 'react';
import { useRecoilState} from 'recoil';
import './screen.scss';
import AppWindows from './components/appwindows';
import DeskTop from './components/desktop';
import Dock from './components/dock';
import TopBar from './components/topbar';
import { mouseState } from './store';


document.oncontextmenu = () => {
  


}



function Screen() {
  const [mouse, setMouse] = useRecoilState(mouseState)
  return (
    <div className="screen" onMouseMove={(e) => {
      if (e.clientX !== mouse[0] && e.clientY !== mouse[1]) {
        setMouse([e.clientX, e.clientY])
        
      }
    }}
      onDrag={(e) => {
        // console.log(e);
        if (e.clientX !== mouse[0] && e.clientY !== mouse[1]) { //减少刷新 只有darg移动时才刷新 (drag事件默认即使鼠标不动也会刷新)
          setMouse([e.clientX, e.clientY])
        }

      }}>
      {/* <img src="https://wdppx.gitee.io/favicon.ico" alt="" /> */}
      <DeskTop />
      <AppWindows />
      <TopBar />

      <Dock />
    </div>
  );
}

export default Screen;
