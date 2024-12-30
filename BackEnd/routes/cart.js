const router = require("express").Router();
const User = require("../model/user");
const { authenticateToken } = require("./userAuth");

// Add book to cart
router.put("/add-book-to-cart", authenticateToken, async (req, res) => {
  try {
    const { bookid, id  } = req.headers; 
    const userData = await User.findById(id);
    const isBookinCart = userData.cart.includes(bookid);
    if(isBookinCart){
        return res.json({
            status:"Sucess",
            message:"Book is already in cart "
        });

    }
    await User.findByIdAndUpdate(id , {
        $push:{cart:bookid} ,
    });

    return res.json({
        status:"sucess",
        message:"Book added to cart "
    })
 
  } catch (error) {

    res.status(500).json({ message: "Internal server error", error: error.message });
  }
});


// Remove book from cart
router.put("/remove-book-from-cart/:bookid", authenticateToken, async (req, res) => {
    try {
      const { bookid } = req.params;
      const {id} = req.headers;
      const userData = await User.findById(id);
      const isBookInCart = userData.cart.includes(bookid);
      if (!isBookInCart) {
        return res.json({
          status: "Success",
          message: "Book is not in the cart",
        });
      }
      await User.findByIdAndUpdate(id, {
        $pull: { cart: bookid },
      });
      return res.json({
        status: "Success",
        message: "Book removed from cart",
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error: error.message });
    }
  });

 
  
// Get cart for a particular user
router.get("/get-user-cart", authenticateToken, async (req, res) => {
    try {
      const { id } = req.headers;
      const userData = await User.findById(id).populate("cart");
     const cart = userData.cart.reverse();
      return res.json({
        status: "Success",
        cart: cart,
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error", error: error.message });
    }
  });
  
  

module.exports = router;
