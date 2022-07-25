const router=require('express').Router();

const {getBook,addBook,updateBook,deleteBook}=require('./controller/book.controller.js');




router.get('/Book',getBook);
router.post('/Book',addBook);
router.put('/Book/:id',updateBook);
router.delete('/Book/:id',deleteBook);







module.exports=router;  
 

