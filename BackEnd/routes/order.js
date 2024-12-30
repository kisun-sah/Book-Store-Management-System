const router = require("express").Router();
const { authenticateToken } = require("./userAuth");
const Book = require("../model/book");
const Order = require("../model/order");
const User = require("../model/user")



// Place order API
router.post("/place-order", authenticateToken, async (req, res) => {
    try {
      const { id } = req.headers;
      const {order} = req.body;
      for(const orderData of order){
        const newOrder = new Order({user:id , book:orderData._id});
        const orderDataFromDb = await newOrder.save();
     
         // saving order in user model 
         await User.findByIdAndUpdate(id , {
            $push: {orders : orderDataFromDb._id},
         });

         //clearing cart
         await User.findByIdAndUpdate(id , {
            $pull: {cart : orderData._id},
         });

      }
      return res.json({
        status:"success",
        message:"Order Placed Secussfully"
      })
    

    } catch (error) {
      res.status(500).json({ message: "Internal server error", error: error.message });
    }
  });


  // get order history of particular user
router.get("/get-order-history", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const userData = await User.findById(id).populate({
      path:"orders",
      populate:{path:"book"},
    });

    const ordersData = userData.orders.reverse();
    return res.json({
      status:"success",
      data:ordersData,
    })
  

  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
});


  // get all orders --admin 
router.get("/get-all-orders", authenticateToken, async (req, res) => {
  try {
    
    const userData = await User.find()
    .populate({
      path:"book ",
      
    })
    .populate({
      path:"user",
    })
    .sort({createdAt: -1});

    return res.json({
      status:"success",
      data:userData,
    })
  

  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
});
  



// Update order status -- Admin
router.put("/update-status/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Check if the user has admin privileges
    if (req.user.role !== "admin") {
      return res.status(403).json({
        status: "error",
        message: "Access denied. Admins only."
      });
    }

    // Validate the status input
    if (!status) {
      return res.status(400).json({
        status: "error",
        message: "Status field is required."
      });
    }

    // Update the order status
    const updatedOrder = await User.findByIdAndUpdate(
      id,
      { status },
      { new: true } // Return the updated document
    );

    // Check if the order exists
    if (!updatedOrder) {
      return res.status(404).json({
        status: "error",
        message: "Order not found."
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Status updated successfully",
      data: updatedOrder
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message
    });
  }
});


module.exports = router;