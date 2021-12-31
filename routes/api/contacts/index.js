import express from "express";
import {
  getContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
  updateStatusContact,
} from "../../../controllers/contacts";
import validation from "../../../midllewares/validation/contactValidation";

const router = express.Router();

router.get("/", getContacts);

router.get("/:contactId", getContactById);

router.post("/", validation.validationOfCreation, addContact);

router.delete("/:contactId", removeContact);

router.put("/:contactId", validation.updateValidation, updateContact);

router.patch(
  "/:contactId",
  validation.updateFavoritValidation,
  updateStatusContact
);

export default router;
