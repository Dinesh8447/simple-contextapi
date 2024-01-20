import React, { useContext } from 'react'
import { Context } from '../context/Maincontext'

export default function Bookdetails({book,id}) {
    const {remove} =useContext(Context)

  return (
    <li className='list' >
        <div className='title'>{book}</div>
        <button onClick={()=>remove(id)} >Delete</button>
    </li>
  )
}
