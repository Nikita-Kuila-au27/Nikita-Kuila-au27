

const Book = [{
    id:1,
    bookName: "The great Gatsby",
    price: 702,
    ISBN: "9000890345",
    authorName: "F. Scott Fitzgeral",
    publishedDate:"10/4/1925",
    edition:"2ND"
},];

function getBook(req,res){
    return res.send(Book)
  
}

function addBook(req,res){
    let {bookName,price,ISBN,authorName,publishedDate,edition}=req.body;
    const id=Book.length+1;
    Book.push({id,bookName,price,ISBN,authorName,publishedDate,edition})
    return res.send(Book);
}

function updateBook(req,res){
    const id=req.params.id;
    const{bookName,price,ISBN,authorName,publishedDate,edition}=req.body;
    //console.log(req.body)
    const index=Book.findIndex(Book=>Book.id===Number(id))

    if(index==-1){
        return res.send('Book not Found');
    }
    Book[index].bookName=bookName;
    Book[index].price=price;
    Book[index].ISBN=ISBN;
    Book[index].authorName=authorName;
    Book[index].publishedDate=publishedDate;
    Book[index].edition=edition;
    
  return res.send('Book Added Successfully');


}
function deleteBook(req,res){
    const id=req.params.id;
    const index=Book.findIndex(Book=>Book.id==id);
    if(index===-1){
        return res.send('Book not found');
    }
    
    Book.splice(index,1);
    return res.send('Book deleted Successfully');
}

 module.exports = { getBook,addBook,updateBook,deleteBook };