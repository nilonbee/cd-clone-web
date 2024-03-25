import React from 'react'

type IconButtonProps = {
  icon: React.ReactElement;
  onClickHandler?: () => void;
  customStyle?: string;
}
export const IconButton = ({ icon, onClickHandler, customStyle }: IconButtonProps) => {
  return (
    <button onClick={onClickHandler} className={`${customStyle} rounded-full max-w-["32px"] bg-transparent hover:bg-grayLight hover:bg-opacity-40`}>
      {icon}
    </button>
  )
}
