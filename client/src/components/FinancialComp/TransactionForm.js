import React from 'react';
import { ReactDOM } from 'react-dom';


const TransactionModal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={props.Ondismiss}>
        <div
            onClick={e=>e.stopPropagation()}
        >
            <div>
                His this is a modal
            </div>
        </div>
    </div>,
    document.querySelector('#TransactionModal')
  )
}

export default TransactionModal