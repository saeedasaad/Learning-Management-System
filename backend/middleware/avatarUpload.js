import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/avatars");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const avatarUpload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
});

export default multer({ storage });
