import React from 'react';
import LoadingIcon from '../assets/loading-icon.svg?react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {

  isLoading?: boolean;
}

const LoadButton = ({children,isLoading, ...props}:ButtonProps) => {
  return (
    <button {...props}>
        {isLoading ? 'Loading' :children}
        {
            isLoading?
            <LoadingIcon className='w-5 h-5 rotate' />:
            <></>
        }
    </button>
  )
}

export default LoadButton