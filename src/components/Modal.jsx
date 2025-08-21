import React from 'react'
import { Link } from 'react-router-dom'

function Modal({divContent ,divContentHolder, modalClassName, id, to, modalBoxClassName, titleClassName, title, desClassName, description, btnClassName, btnText, btnholderClassName, type, btnOnClick}) {
  return (
    <div className={`modal ${modalClassName}`} role='dialog' id={id}>
      <div className={`modal-box ${modalBoxClassName}`}>
        <h3 className={`text-lg font-semibold ${titleClassName}`}>{title}</h3>
        <p className={`py-4 ${desClassName}`}>{description}</p>

        <div className={`${divContentHolder}`}>{divContent}</div>

        <div className={`modal-action ${btnholderClassName}`}>
          {to ? (
            <Link to={to} className={`btn ${btnClassName}`}>
            {btnText}
          </Link>
          ) : (
            <button type={type} className={`btn ${btnClassName}`} onClick={btnOnClick}>
              {btnText}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal
