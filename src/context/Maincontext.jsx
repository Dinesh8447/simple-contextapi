import React, { createContext, useEffect, useState } from 'react'

export const Context = createContext()

export default function Maincontext(props) {
  const random=Math.floor(Math.random())  
  const [books,setbooks]=useState([
    {title:"this is context api" ,id:1},
    {title:"this is context" ,id:2},
    {title:"this is api" ,id:3},
  ],()=>{
    const locadata = localStorage.getItem('books')
    return locadata ? JSON.parse(locadata) : [];
  })
  
  useEffect(()=>{
    localStorage.setItem("books",JSON.stringify(books))
  },[books])
  function add(title){
    setbooks([...books,{title,id:random}])
  }

  function remove(id){
    setbooks(books.filter(book=>book.id !== id))
  }

    return (
   <Context.Provider value={{books,add,remove}}>
        {props.children}
   </Context.Provider>
  )
}
