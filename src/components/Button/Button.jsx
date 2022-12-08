import React from 'react'

const Button = ({ style, type = 'button ', text, icon = '', onClick }) => {
  switch (style) {
    case 'primary':
      return (
        <button
          className='text-md font-medium px-3 py-2 rounded-md bg-blue-700 hover:bg-blue-900'
          type={type}
          onClick={onClick}
        >
          { icon && <i className={icon + ' mr-1'}></i> }
          { text }
        </button>
      );
    case 'danger':
      return (
        <button
          className='text-md font-medium px-3 py-2 rounded-md bg-red-500 hover:bg-red-700'
          type={type}
          onClick={onClick}
        >
          { icon && <i className={icon + ' mr-1'}></i> }
          { text }
        </button>
      );
    
  }
}

export default Button
