import React from 'react'
import { Link } from 'react-router-dom'

function Button({to, className, text, divclassName, icon, onClick, type}) {
  return (
    <div className={divclassName}>
      {to ? (
        <Link to={to} className={className} onClick={onClick}>
          {text}
          {icon}
        </Link>
        ) : (
        <button type={type} className={className} onClick={onClick}>
          {text}
          {icon}
        </button>
        )}
    </div>
  );
}

export default Button