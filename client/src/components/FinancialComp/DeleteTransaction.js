import React from 'react'
import { Link } from 'react-router-dom'
import Modal from '../Modal'
import { deleteTransaction } from '../../actions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const DeleteTransaction = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const regex = /(?<=delete\/).*/g;

    const onDelete = (id)=>{
        dispatch(deleteTransaction(id))
        navigate('/dashboard')

    }

    const renderActions = ()=>{
        const my_path = window.location.href        
        const id = my_path.match(regex)

        return(
            <React.Fragment>
                <button
                    onClick={()=>onDelete(id)}
                    
                >
                    Delete
                </button>
                <Link to="/dashboard" >
                    Cancel
                </Link>
            </React.Fragment>
        )
    }

    const renderWarning =()=>{
        return "Are you sure you want to delete this transaction?"
    }

  return (
    <Modal
        title = "Delete transaction"
        content = {renderWarning()}
        actions = {renderActions()}
        onDismiss = {()=>navigate('/')}
    />
  )
}

export default DeleteTransaction