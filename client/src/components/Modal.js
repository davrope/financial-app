import React from 'react';
import {AiOutlineClose} from 'react-icons/ai'
import ReactDOM from 'react-dom';

const Modal = props => {
  return ReactDOM.createPortal(
    

      <div id='modal' onClick={props.onDismiss} className='mymodal' >
        <div
          onClick={e => e.stopPropagation()}
          className = 'modal-content'

        >
          <div className='modal-header'>
            <h5 className='modal-title'>{props.title}</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={props.onDismiss}>
              <AiOutlineClose/>
            </button>
            
          </div>
          <div className='modal-body'>
            <p>{props.content}</p>
          </div>
          <div className='modal-footer'>
            <div className="actions">{props.actions}</div>
          </div>
          
        </div>
      </div>,
    
    document.querySelector('#modal')
  );
};

export default Modal;