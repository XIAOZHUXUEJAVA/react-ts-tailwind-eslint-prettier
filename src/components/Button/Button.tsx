import React from 'react'

interface ButtonProps {
  text: string
  onClick: () => void
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-blue-500 hover:bg-blue-700  rounded px-4 py-2 font-bold text-white"
    >
      {text}
    </button>
  )
}

export default Button
