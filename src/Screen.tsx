/* eslint-disable react/jsx-pascal-case */

// import { useState } from 'react';
import { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import Home from './components/home';
import Menu from './components/home/Menu';
import Open from './components/open';
import { Gmouse } from './components/store/mouse';
import './screen.scss';
import useMove from './utils/addMove';



const Mouse = () => {
  useMove()
  return <></>
}

const Screen = () => {
  const [open, setOpen] = useState(true)
  const setGmouse = useSetRecoilState(Gmouse)
  const [showMenu, setMenu] = useState(false)
  const [menuPost, setMenuPost] = useState<[number, number]>([0, 0])

  return (
    <>
      <div className='screen'
        onMouseMove={(e) => {
          setGmouse([e.pageX, e.pageY])
        }}

        onContextMenu={e => {
          e.preventDefault()
          e.stopPropagation()
          //@ts-ignore
          if (e.target.parentElement.className === "screen") {
            console.log("screen");
            
            let x=e.pageX ,y = e.pageY
            //@ts-ignore
            if(e.pageX > e.target.offsetWidth - 160){
                x -=  160
            }
            //@ts-ignore
            if(e.pageY > e.target.offsetHeight - 324){
              y -=   324
            }
            if (showMenu) {
              setMenuPost([x, y])
              setMenu(false)
              setTimeout(() => {
                setMenu(true)
              }, 100);
            } else {
              setMenuPost([x, y])
              setMenu(true)
            }
          }



        }}
        onClick={e => {
          setMenu(false)

        }}
      >
        <Open open={open} setOpen={setOpen} />
        {!open && <Home />}
        {!open && showMenu && <Menu pos={menuPost} />}
        <Mouse />
      </div>

    </>

  )
}

export default Screen;
