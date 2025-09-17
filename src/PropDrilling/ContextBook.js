import React from 'react'
import { createContext, useContext, useState } from 'react'
import bookinfo from '../bookinfo.js'


var BookContainer = createContext();
export const ContextBook = () => {
  var [books, setBooks] = useState(bookinfo);
  console.log(books);
  var removeBook = (id) => {
    var remainingbooks = books.filter((book) => {
      return book.id !== id;
    })
    setBooks(remainingbooks);
  }
  return (
    <div>
      <BookContainer.Provider value={{ books, removeBook }}>
        <List />
      </BookContainer.Provider>
    </div>
  )
}

const List=()=>{
    var {books} = useContext(BookContainer);
    return(
        <>
        {books.map((book)=>{
            return(
                <SingleBooks book={book}/>   
            )
        })}
        </>
    )
}
const SingleBooks=({book})=>{
    var {removeBook} = ContextBook(BookContainer);
    return(
        <>
        <h2>{book.id}</h2>
        <h2>{book.title}</h2>
        <img src={book.imgpath} alt='not found'/>
        <h2>{book.author}</h2>
        <button onClick={()=>{removeBook(book.id)}}>Remove Book</button>
        </>
    )
}

