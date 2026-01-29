import LoadingIcon from '../assets/loading-icon.svg?react';

type LoadingType = {
    message: string;
}

const Loading = ({ message="Please wait"}: LoadingType) => {

  return (
    <div>
        <div className='flex justify-center items-center'>
          <LoadingIcon className='rotate relative'/>
        </div>
        <p className='mt-2 text-[1.55rem]'>
            {message}
        </p>
    </div>
  )
}

export default Loading