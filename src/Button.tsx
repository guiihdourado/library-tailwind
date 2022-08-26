import React from 'react';

export interface ButtonProps {
  typeButton?: 'primary' | 'success' | 'secundary' | 'tertiary'
}

const bgColor = {
  primary: 'bg-primary',
  success: 'bg-success',
  secundary: 'bg-white',
  tertiary: 'bg-slate-6'
}

const bgColorHover = {
  primary: 'bg-primary-hover',
  success: 'bg-success-hover',
  secundary: 'bg-slate-5',
  tertiary: 'bg-slate-5'
}

const borderColor = {
  primary: 'border-primary',
  success: 'border-success',
  secundary: 'border-slate-4',
  tertiary: 'border-slate-6'
}

const borderColorHover = {
  primary: 'border-primary',
  success: 'border-success',
  secundary: 'border-slate-5',
  tertiary: 'border-slate-5',
}

const colorText = {
  primary: 'text-white',
  success: 'text-white',
  secundary: 'text-slate-2',
  tertiary: 'text-slate-2',
}

const Button = ({ typeButton = 'primary' }: ButtonProps): JSX.Element => {
  return (
    <button
      className={`flex items-center justify-center ${bgColor[typeButton]} rounded border border-solid ${borderColor[typeButton]} px-2.5 py-1.5 ${colorText[typeButton]} hover:${bgColorHover[typeButton]} hover:${borderColorHover[typeButton]}`}
    >
      Create new
    </button>
  );
}

export { Button };