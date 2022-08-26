import React from 'react';

export interface ButtonProps {
  typeButton?: 'primary' | 'success' | 'secundary' | 'tertiary'
  children: React.ReactNode
}

const bgColor = {
  primary: 'primary',
  success: 'success',
  secundary: 'white',
  tertiary: 'slate-6'
}

const bgColorHover = {
  primary: 'primary-hover',
  success: 'success-hover',
  secundary: 'slate-5',
  tertiary: 'slate-5'
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

const Button: React.FC<ButtonProps> = ({ typeButton = 'primary', children }) => {
  return (
    <button
      className={`bg-${bgColor[typeButton]} hover:bg-${bgColorHover[typeButton]} hover:${borderColorHover[typeButton]} transition duration-300	 flex items-center justify-center ${bgColor[typeButton]} rounded border border-solid ${borderColor[typeButton]} px-2.5 py-1.5 ${colorText[typeButton]}`}
    >
      {children}
    </button>
  );
}

export { Button };