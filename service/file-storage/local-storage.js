import fs from "fs/promises";
import path from "path";

class LocalStorage {
  constructor(file, user) {
    this.userId = user.id;
    this.filename = file.filename;
    this.filePath = file.path;
    this.folderAvatars = process.env.FOLDER_FOR_AVATARS;
  }

  async save() {
    const destination = path.join("public", this.folderAvatars, this.userId);
    await fs.mkdir(destination, { recursive: true });
    await fs.rename(this.filePath, path.join(destination, this.filename));
    const avatarUrl = path.normalize(path.join(this.userId, this.filename));
    return avatarUrl;
  }
}

export default LocalStorage;
