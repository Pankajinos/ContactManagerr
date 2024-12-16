const express = require("express")
const router = express.Router();
const {
    getContacts,getContact,createContact,deleteContact,updateContact
} = require("../controllers/contactControllers");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken)
router.route("/").get(getContacts);
router.route("/").post(createContact);
router.route("/:id").delete(deleteContact);
router.route("/:id").get(getContact);
router.route("/:id").put(updateContact);

module.exports = router;