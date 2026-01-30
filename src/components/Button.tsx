import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {}

const Button = ({children, ...props}: ButtonProps) => {
  return (
    <button {...props}>{children}</button>
  )
}

export default Button