import React, { useState } from 'react'
import bookinfo from '../bookinfo'


export const PropDrilling = () => {
    var [books,setBooks]=useState(bookinfo);
    console.log(books);

    var removeBook = (id)=>{
        var remainingbooks =books.filter((book)=>{
            return book.id !== id;
        })
        setBooks(remainingbooks);
    }
    
  return (
    <div>
      <List books={books} removeBook={removeBook}/>
    </div>
  )
}



const List=({books, removeBook})=>{
    return(
        <>
        {books.map((book)=>{
            return(
                <SingleBooks book={book} removeBook={removeBook}/>   
            )
        })}
        </>
    )
}
const SingleBooks=({book, removeBook})=>{
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