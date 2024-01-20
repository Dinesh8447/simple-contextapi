import React, { useContext } from 'react'
import { Context } from '../context/Maincontext'


export default function Navbar() {
    const {books} = useContext(Context)
  return (
    <div className='navbar'>
        <h1>Reading List....</h1>
        <p>Currently u Have {books.length} books to get through....</p>  
    </div>
  )
}
