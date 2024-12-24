const router = require("express").Router();
const User = require("../model/user"); 
const jwt = require('jsonwebtoken');
const Book =  require('../model/book')
const {authenticateToken} = require("./userAuth")


// add book ---admin 
router.post("/add-book" , authenticateToken , async  (req , res) => {

    try {
         const {id} = req.headers;
         const user = await User.findById(id);

         if(user.role !== "admin"){
          return  res.status(400).json({ message: " You don't having to access to perform admin work  " });
        
         }

        const book = new Book({
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            saleprice: req.body.saleprice,
            category: req.body.category,
            language: req.body.language,
            description:req.body.description,
            coverImage:req.body.coverImage
        });
        await book.save();
        res.status(200).json({message:" Book added sucessfully"})
        
    } catch (error) {

        res.status(500).json({ message: "Internal server error " });
        
    }
})

// update book -- admin 
router.put("/update-book" , authenticateToken , async  (req , res) => {

    try {
         const {bookid} = req.headers;
         await Book.findByIdAndUpdate(bookid , {
            title: req.body.title,
            author: req.body.author,
            price: req.body.price,
            saleprice: req.body.saleprice,
            category: req.body.category,
            language: req.body.language,
            description:req.body.description,
            coverImage:req.body.coverImage
          
        });

        return  res.status(200).json({message:" Book updated sucessfully"})
       
        
    } catch (error) {

        res.status(500).json({ message: "Internal server error " });
        
    }
})

//delete book -- admin

router.delete("/delete-book" , authenticateToken , async (req , res) => {
     try {

        const {bookid } = req.headers;
        await Book.findByIdAndDelete(bookid);
        return res.status(200).json({message:"Book deleted Sucessfully"})
        
     } catch (error) {
        res.status(500).json({ message: "Internal server error " });
     }
})

// get book -- admin
router.get("/get-all-book" , async (req , res) => {
    try {

       const books = await Book.find().sort({ createdAt: -1});
      return res.json({
         status:"sucess" , 
         data: books
        });
       
    } catch (error) {
       res.status(500).json({ message: "Internal server error " });
    }
});


// get recently added book limit 4 
router.get("/get-recent-book" , async (req , res) => {
    try {

       const books = await Book.find().sort({ createdAt: -1}).limit(4);
      return res.json({
         status:"sucess" , 
         data: books
        });
       
    } catch (error) {
       res.status(500).json({ message: "Internal server error " });
    }
});

// get book by id 

router.get("/get-book-by-id/:id", async (req, res) => {
    try {
       const { id } = req.params; // Get the 'id' from the URL params
       const book = await Book.findById(id); // Find book by ID
       if (!book) {
           return res.status(404).json({ message: "Book not found" }); // Return 404 if book not found
       }
       return res.json({
        status: "success",
        data: book,
       });
    } catch (error) {
       res.status(500).json({ message: "Internal server error" });
    }
});



module.exports = router;