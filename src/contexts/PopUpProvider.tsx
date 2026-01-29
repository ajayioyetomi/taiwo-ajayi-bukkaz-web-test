import { createContext, useEffect, useState, type ReactNode} from 'react';
import { createPortal } from 'react-dom';


type PopUpType = {
    open: boolean,
    setOpen: (arg:boolean)=> boolean,
    setPopUp: (arg:ReactNode, arg2?:boolean)=> ReactNode
}
export type PopUpChildren = {
    children: ReactNode
}
export const PopUpContext = createContext<PopUpType>({
    open: false,
    setOpen: (arg:boolean)=> arg,
    setPopUp: () => <></>
})
const popup_root = document.getElementById('pop-up-root')!;
const PopUpProvider = ({children}: PopUpChildren) => {
  const [open, set_open] = useState<boolean>(false);
  const [popup, set_pop_up] = useState<ReactNode>(<></>);
  const [is_loading,set_is_loading] = useState<boolean>(false);
  const setOpen = (open:boolean) =>{
    
    let root = document.getElementById('pop-up-root');
    if(open && root){
        root.setAttribute('open','')
    }
    else popup_root.removeAttribute('open');
    set_open(open);
    return open;
  }
  const setPopUp = (popup:ReactNode, is_loading=false) =>{
    set_pop_up(popup);
    set_is_loading(is_loading);
    return popup;
  }
	const closePopUp = () =>{
		setPopUp(<></>)
    setOpen(false);
	}

  const value:PopUpType = {
    open,
    setOpen,
    setPopUp
  }
	useEffect(()=>{
		const handleKeyboardEscape = (e: KeyboardEvent) =>{
				let key = e.key;
				if(key === 'Escape' || key === 'escape'){
						setPopUp(<></>)
						setOpen(false);
				}
		}
		window.addEventListener('keydown',handleKeyboardEscape)
		return ()=> window.removeEventListener('keydown',handleKeyboardEscape)
	})
  return (
    <PopUpContext.Provider value={value}>
        {children}
        {
            createPortal(
              <> {
                open ?
                <div className='fixed top-0 left-0 w-screen h-screen flex justify-center items-end sm:items-center '>
                    <span onClick={ !is_loading? closePopUp :()=>{}} className='absolute top-0 left-0 z-2 w-screen h-screen bg-black opacity-70'></span>
                  { <div className={`z-3 w-fit h-fit origin-center zoom-in-out`}>
                        {popup}
                    </div> 
									}
                </div>:
                <></>
                }
              </>,
              popup_root
            )
        }
        
    </PopUpContext.Provider>
  )
}

export default PopUpProvider