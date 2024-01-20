import React, { useContext, useState } from 'react'
import { Context } from '../context/Maincontext'


export default function Addbooks() {
    const [title,settitle]=useState()
    const {add} = useContext(Context)

    function adddetiles(e){
        e.preventDefault()
        add(title)
        settitle('')
    }

  return (
    <form onSubmit={adddetiles} >
        <input 
        type="text"
        placeholder='title'
        value={title}
        onChange={e=>settitle(e.target.value)}
        />
        <button type='submit'>Add</button>
    </form>
  )
}
