import { useState } from 'react';
import { usePopup } from '../hooks/usePopup';

import { LoadButton as Button } from '../components';
import { useNavigate } from 'react-router-dom';
import {Loading, LoginSuccessModal} from '.';

import ErrorIcon from '../assets/error-icon.svg?react';



const ErrorModal = () => {
  const [is_loading, set_is_loading] = useState<boolean>(false);
  const {setOpen, setPopUp} = usePopup();
  const navigate = useNavigate();
  const handleTryAgain = () =>{
    set_is_loading(true);
    const try_again = setTimeout(() =>{
        setPopUp(<Loading message='Waiting for confirmation on your phone' />,false);
      const start_loading = setTimeout(()=>{
        set_is_loading(false);
        setPopUp(<LoginSuccessModal />, false);
        clearTimeout(start_loading);
        const load_home_page = setTimeout(()=>{
          clearTimeout(load_home_page);
          setOpen(false);
          setPopUp(<></>);
          navigate('/home');
        },1000)
      },3000)
      clearTimeout(try_again);
    },1000)
    

  }
  return (
    <div className='p-2 flex flex-col gap-1 items-center'>
      <ErrorIcon />
      <p className='text-2xl font-regular'>Unable to Connect</p>
      <p className='mb-4'>Please check your internet connection and try again.</p>
      <Button onClick={handleTryAgain} className='flex gap-2 items-center py-1.5 px-6 text-[25px] rounded-4xl border-solid border-2 border-[#f2f2f2]' isLoading={is_loading}>
        Try Again
      </Button>
    </div>
  )
}

export default ErrorModal