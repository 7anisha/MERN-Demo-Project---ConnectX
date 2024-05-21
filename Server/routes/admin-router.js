const express = require ("express")
const adminController =require("../controller/admin-controller")
const adminMiddleware =require("../middlewares/admin-middleware")
const authMiddleware =require("../middlewares/auth-middleware")
const router = express.Router();

router.route("/user").get(authMiddleware,adminMiddleware, adminController.getAllUsers)
router.route("/Contact").get(authMiddleware,adminMiddleware,adminController.getAllContacts)
router.route("/user/delete/:id").delete(authMiddleware,adminMiddleware,adminController.deleteUserById)// :id getting from url using params in admin-controller
router.route("/contact/delete/:id").delete(authMiddleware,adminMiddleware,adminController.deleteContactById)// :id getting from url using params in admin-controller
router.route("/user/:id").get(authMiddleware,adminMiddleware,adminController.getUserById)
router.route("/user/update/:id").patch(authMiddleware,adminMiddleware,adminController.updateUserById)
module.exports = router;