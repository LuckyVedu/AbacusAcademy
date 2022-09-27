import React from 'react'
import { Link } from 'react-router-dom'
import './Get.css'

 const GetInstitute = props => {
    const {instituteData, role, onDeleteInstitute,i} = props
    

    const {id, instituteName, instituteDescription, instituteAddress, mobile, email, imgUrl,} = instituteData

    const deleteInstitute = (i) => {
        onDeleteInstitute(id, i);
    }

    return (
        <div>
          
            <div className='item-container'>
            <img src={imgUrl} alt={id} className />
            <h1>{instituteName}</h1>
            <p>{instituteDescription}</p>
            <p>{mobile}</p>
            <p>{email}</p>
            <p>{instituteAddress}</p>
            {(role !== 'Student') ? <div className='button-container'>
               <Link to="/edit/institute"> <button className='edit-button' > Edit institute </button></Link>
                <button className='delete-button' onClick={deleteInstitute}>Delete institute</button>
            </div> : <div className='button-container'>
                <button className='edit-button'>Add to cart</button>
            </div>}
        </div>
        </div>
    )
 }
 
export default GetInstitute