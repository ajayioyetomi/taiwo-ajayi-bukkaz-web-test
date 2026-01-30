import SuccessIcon from '../assets/successful-icon.svg?react';

const SuccessfulModal = () => {
  return (
    <div className="flex gap-1 flex-col items-center justify-center">
      <SuccessIcon />
      <p className='mt-2 text-2xl font-regular'>TV Linked Successfully</p>
      <p>Enjoy your experience using logosum TV</p>
    </div>
  )
}

export default SuccessfulModal