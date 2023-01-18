import { Router } from "express";
import {
  getFeedPosts,
  getUserPosts,
  likePost,
  createPost,
  deletePost
} from "../controllers/postControllers";
import catchAsyncErrors from "../utils/catchAsyncErrors";
import { upload } from "../utils/storage";

const router = Router();

router.get("/", catchAsyncErrors(getFeedPosts));
router.get("/:userId", catchAsyncErrors(getUserPosts));
router.post("/", upload.single("picture"), catchAsyncErrors(createPost));
router.patch("/:postId/like", catchAsyncErrors(likePost));
router.delete("/:postId/delete", catchAsyncErrors(deletePost));

export default router;
