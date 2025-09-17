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
const BookList3 = () => {
return (
    <div className='booklist'>
        {bookinfo.map((book, index) => {
            var {title, imgpath, author, gnere} = book;
            return (
                <Book3 key={index} title={title} imgpath={imgpath} author={author} gnere={gnere} />
                /*
                We can also use as a shortcut method.
                <Book3 {...book} />
                */
            );
        })}
    </div>
)
}
var Book3 =(props)=>{
    console.log(props.title,props.imgpath,props.author);
    var{title,imgpath,author,gnere}=props;
    return (
        <div className='book'>
        <h3>{title}</h3>
        <img src={imgpath} alt="not found" width="170px" height="200px"></img>
        <p>{author}</p>
        </div>)

}

export default BookList3