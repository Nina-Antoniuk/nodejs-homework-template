import { HttpCode } from "../../lib/consts";
import { updateContact } from "../../repository/contacts";

export default async (req, res, next) => {
  const contact = await updateContact(req.params.contactId, req.body);
  if (contact) {
    return res.status(HttpCode.OK).json(contact);
  }
  return res.status(HttpCode.NOT_FOUND).json({ message: "Not found" });
};
