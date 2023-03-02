import React, { useContext } from 'react'
import noteContext from '../../context/notes/noteContext'

const Services =() => {
    const context = useContext(noteContext);
    const{auth} = context;
    return (
        <div>
            This is Me: {auth.fullname} and my role is: {auth.role}
        </div>
    )
}

export default Services