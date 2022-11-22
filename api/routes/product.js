const router = require("express").Router();
const productController = require("../controllers/product")

//CREATE
router.post("/", productController.createProduct);

//UPDATE
router.put("/:id", productController.updateProduct);

//DELETE POST
router.delete("/:id", productController.deleteProduct);

//like / dislike a post
router.put("/:id/like", productController.likeProduct);

//GET POST
router.get("/:id", productController.getProduct);

//GET ALL POSTS
router.get("/", productController.getAllProduct);

//get user's all posts
router.get("/profile/:username", productController.getUserProduct);

module.exports = router;