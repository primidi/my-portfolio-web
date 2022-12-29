import React from 'react';

const Button = ({ style = 'default', type = 'button', text, icon = '', onClick }) => {
  switch (style) {
    case 'primary':
      return (
        <button
          className='text-md font-medium px-3 py-2 rounded-md bg-button-blue-default hover:bg-button-blue-hovered'
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
          className='text-md font-medium px-3 py-2 rounded-md bg-button-red-default hover:bg-button-red-hovered'
          type={type}
          onClick={onClick}
        >
          { icon && <i className={icon + ' mr-1'}></i> }
          { text }
        </button>
      );
    default:
      return (
        <button
          className='text-md font-medium px-3 py-2 rounded-md bg-button-black-default hover:bg-button-black-hovered'
          type={type}
          onClick={onClick}
        >
          { icon && <i className={icon + ' mr-1'}></i> }
          { text }
        </button>
      )  
  }
};

export default Button
