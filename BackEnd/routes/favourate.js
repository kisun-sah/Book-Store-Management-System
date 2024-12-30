const router = require("express").Router();
const User = require("../model/user"); 
const {authenticateToken} = require("./userAuth")

// add book to favourate 
router.put("/add-book-to-favourate", authenticateToken , async (req , res) => {
     try {
        const {bookid , id} = req.headers;
        const userData = await User.findById(id);
        const isBookFavourite = userData.favourites.includes(bookid);
        if(isBookFavourite){
            return res.status(200).json({message:"Book already in favourates"})
        }
        await User.findByIdAndUpdate(id , {$push:{favourites:bookid}});
        return res.status(200).json({message:"Book added to favourates"})

     } catch (error) {
        res.status(500).json({ message: "Internal server error" });
     }
})


// Remove book from favourites
router.put("/remove-book-from-favourite", authenticateToken, async (req, res) => {
   try {
      const {bookid , id} = req.headers;
      const userData = await User.findById(id);
      const isBookFavourite = userData.favourites.includes(bookid);
      if(isBookFavourite){
         await User.findByIdAndUpdate(id , {$pull:{favourites:bookid}});

      }

      return res.status(200).json({message:"Book removed from  favourates"})
  
   } catch (error) {

     res.status(500).json({ message: "Internal server error", error: error.message });
   }
 });
 

 // Get favorite books of a particular user
router.get("/get-favourite-books", authenticateToken, async (req, res) => {
   try {
     const { id } = req.headers;
     // Fetch user data
     const userData = await User.findById(id).populate("favourites");
     // Return the favorites list
     const favouriteBooks = userData.favourites || [];
     return res.status(200).json({ message: "Favourite books fetched successfully", data: favouriteBooks });
   } catch (error) {
     console.error("Error fetching favourite books:", error.message);
     res.status(500).json({ message: "Internal server error", error: error.message });
   }
 });
 

module.exports = router;