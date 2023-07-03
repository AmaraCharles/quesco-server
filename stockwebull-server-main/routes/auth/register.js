var express = require("express");
var { hashPassword, sendWelcomeEmail,resendWelcomeEmail } = require("../../utils");
const UsersDatabase = require("../../models/User");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");

router.post("/register", async (req, res) => {
  const {  quantity,
    weight,
    serviceType,
    description,
    receiverName,
    receiverEmail,
    receiver,
    deliveryDay,
    senderName,
    senderAddress,
    shipmentDate,
    from,
   to,
    location } = req.body;

  //   check if any user has that username
  const user = await UsersDatabase.findOne({ email });

  // if user exists
  if (user) {
    res.status(400).json({
      success: false,
      message: "email address is already taken",
    });
    return;
  }

  await UsersDatabase.create({
    title,
   quantity,
    weight,
    serviceType,
    description,
    receiverName,
    receiverEmail,
    receiver,
    deliveryDay,
    senderName,
    senderAddress,
    shipmentDate,
    from,
   to,
    location,
  })
    .then((data) => {
      return res.json({ code: "Ok", data: user });
    })
    .then(() => {
      var token = uuidv4();
      
    })
    .catch((error) => {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    });
});




module.exports = router;
