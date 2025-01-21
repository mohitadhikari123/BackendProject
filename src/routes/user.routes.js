import { Router } from "express";
import {
  loginUser, logoutUser, registerUser, refreshAccessToken} from "../controllers/user.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { veriftJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

router.route("/login").post(loginUser);

// Secured Routes
router.route("/logout").post(veriftJWT, logoutUser);
router.route("/refreshToken").post(refreshAccessToken);

export default router;
