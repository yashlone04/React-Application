import React from 'react'
import bookinfo from '../bookinfo';
import { useState } from 'react'

const UseStateWithArrayOfObjects = () => {
    var [books,setBooks]=useState(bookinfo);
    var deleteBook=()=>{
        setBooks([]);
    }
    var addBooks=()=>{
        setBooks(bookinfo);
    }
  return (
    <div>
        {books.length!=0 ? <button onClick={deleteBook}>Delete All Books</button> : <button onClick={addBooks}>Add All Books</button>}
      <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Gnere</th>
                <th>Image</th>
            </tr>
        </thead>
        <tbody>
            {books.map((book)=>{
                var{title,author,gnere,imgpath}=book;
                return( 
                    <tr key={title}>
                        <td>{title}</td>
                        <td>{author}</td>
                        <td>{gnere}</td>
                        <td><img src={imgpath} alt="not found" width="100px" height="120px"></img></td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default UseStateWithArrayOfObjects
