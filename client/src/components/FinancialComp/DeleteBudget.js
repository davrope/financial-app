import React from 'react'
import { Link } from 'react-router-dom'
import Modal from '../Modal'
import { deleteBudget } from '../../actions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const DeleteBudget = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const regex = /(?<=delete\/).*/g;

    const onDelete = (id)=>{
        dispatch(deleteBudget(id))
        navigate('/dashboard')

    }

    const renderActions = ()=>{
        const my_path = window.location.href        
        const id = my_path.match(regex)

        return(
            <React.Fragment>
                <button
                    className='btn btn-danger'
                    onClick={()=>onDelete(id)}
                    style = {{marginRight:'0.5rem'}}
                >
                    Delete
                </button>
                <Link to="/dashboard" className='btn btn-secondary' >
                    Cancel
                </Link>
            </React.Fragment>
        )
    }

    const renderWarning =()=>{
        return "Are you sure you want to delete this budget?"
    }

  return (
    <Modal
        title = "Delete budget"
        content = {renderWarning()}
        actions = {renderActions()}
        onDismiss = {()=>navigate('/')}
    />
  )
}

export default DeleteBudget