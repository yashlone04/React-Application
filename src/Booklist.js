import React from 'react'

var title = "Ideas and Opinions"
var img = "https://m.media-amazon.com/images/I/610jKE0mMlL._UF1000,1000_QL80_.jpg"
var author = "Albert Einstein"
var sampleobj = {
  uname: "John Doe",
  age: 21
};

var samplearr = [{ uname: "Jane Doe", age: 22 },{ uname: "Jim Doe", age: 23 },{ uname: "Jake Doe", age: 24 }];

const Booklist = () => {
  return (
    <div>
      <h1>Hello, BookList Component!</h1>
      <Book />
      <Book2 />
      <Book3 />
    </div>
  )
}

export default Booklist

const Book = () => {
    return (
        <div>
            <h2>Ideas and Opinions</h2>
            <img src="https://m.media-amazon.com/images/I/610jKE0mMlL._UF1000,1000_QL80_.jpg" alt="Cover Page" width={300} height={500}/>
            <p>Author: Albert Einstein</p>
        </div>
    )
}

const Book2 = () => {
    return (
        <div>
            <h2>{title}</h2>
            <img src={img} alt="Cover Page" width={300} height={500}/>
            <p>Author: {author}</p>
        </div>
    )
}

const Book3 =()=>{
   return (
        <div>
            <h2>{sampleobj.uname}---{sampleobj.age}</h2>
            <h2>{samplearr[0].uname}---{samplearr[0].age}</h2>
            <h2>{samplearr[1].uname}---{samplearr[1].age}</h2>
            <h2>{samplearr[2].uname}---{samplearr[2].age}</h2>
        </div>
   )
}