import React from 'react'
var bookinfo=[{title:"Ideas and Opinions",
    imgpath:"https://m.media-amazon.com/images/I/610jKE0mMlL._SY522_.jpg" , author:" Albert Einstein", gnere:"Biografi"},
    {
        title:"Savitribai Phule",
        imgpath:"https://m.media-amazon.com/images/I/71Dtgi9VIlL._SY425_.jpg" ,author:" by G. A. Ugale"
    },
    {
        title:"The World as I See It", imgpath:"https://m.media-amazon.com/images/I/81RViQwXYuL._SY522_.jpg",
    
        author:" Albert Einstein", gnere:"Biografi"

    }
]
const BookList2 = () => {
return (
    <div className='booklist'>
        <Book2 title={bookinfo[0].title}
        imgpath={bookinfo[0].imgpath} author={bookinfo[0].author} gnere={bookinfo[0].gnere}>Book1</Book2>
        <Book2 title={bookinfo[1].title}
        imgpath={bookinfo[1].imgpath} author={bookinfo[1].author} gnere={bookinfo[1].gnere}>Book1</Book2>
        <Book2 title={bookinfo[2].title}
        imgpath={bookinfo[2].imgpath} author={bookinfo[2].author} gnere={bookinfo[2].gnere}>Book1</Book2>
    </div>
)
}
var Book2 =(props)=>{
    console.log(props.title,props.imgpath,props.author);
    var{title,imgpath,author,gnere}=props;
    return (
        <div className='book'>
        <h3>{title}</h3>
        <img src={imgpath} alt="not found" width="170px" height="200px"></img>
        <p>{author}</p>
        </div>)

}

export default BookList2