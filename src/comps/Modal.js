import React from 'react'
import { useFirestore } from '../hooks/useFirestore' 

const Modal = ( {selectedImg, setSelectedImage} ) => {

    const removeModal = (e) => {
        if ( e.target.classList.contains('backdrop') ) {
        setSelectedImage(null)
        }
    }

    return (
    <div className='backdrop' onClick= {removeModal}>
        <img src={selectedImg} alt='enlarged pic' />
    </div>
    )
}

export default Modal