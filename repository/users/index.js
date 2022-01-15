import { User } from "../../model";

const findById = async (id) => {
  return await User.findById(id);
};

const findByEmail = async (email) => {
  return await User.findOne({ email });
};

const findByToken = async (token) => {
  return await User.findOne({ token });
};

const create = async (body) => {
  const user = new User(body);
  console.log("create repo", user);
  return await user.save();
};

const updateToken = async (id, token) => {
  return await User.updateOne({ _id: id }, { token });
};

const updateAvatar = async (id, avatar, idAvatarCloud = null) => {
  return await User.updateOne({ _id: id }, { avatar, idAvatarCloud });
};

export default {
  findById,
  findByEmail,
  findByToken,
  create,
  updateToken,
  updateAvatar,
};
