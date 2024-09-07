import React from 'react';


interface OverflowCardProps {
  onClose: () => void;
}

const OverflowCard: React.FC<OverflowCardProps> = ()=> {
  return (
    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 w-80 bg-red-600 shadow-lg rounded-lg z-20'>
     </div>
  );
};

export default OverflowCard;
