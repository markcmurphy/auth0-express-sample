const express = require("express"),
  router = express.Router(),
  BigCommerce = require("node-bigcommerce");

const bigCommerce = new BigCommerce({
  clientId: process.env.CLIENT_ID,
  secret: process.env.CLIENT_SECRET,
  callback: "https://de1ac9993da4.ngrok.io/auth",
  responseType: "json",
});

// router.get("/", (req, res, next) => {
//   try {
//     bigCommerce
//       .authorize(req.query)
//       .then((data) => console.log(data))
//       .then((data) => res.render("auth", { title: "Authorized!" }));
//   } catch (err) {
//     next(err);
//   }
// });
// module.exports = router;

router.get("/", (req, res, next) => {
  bigCommerce
    .authorize(req.query)
    .then((data) => console.log(data))
    .then((data) => res.render("auth", { title: "Authorized!" }).catch(err));
});
module.exports = router;
