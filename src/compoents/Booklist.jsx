import React, { useContext } from 'react'
import { Context } from '../context/Maincontext'
import Bookdetails from './Bookdetails'

export default function Booklist() {
  const { books } = useContext(Context)
  return books.length ? (
    <div className='book-list'>
      {books.map((book) => (
      <Bookdetails book={book.title} id={book.id} />
      // <li>{book.title}</li>
      ))
      }
    </div >
  ) : (
    <div className='empty'>There is no Books.....</div>
  )
}


