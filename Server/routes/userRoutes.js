import express from "express";

import {
  newUser,
  getAllUser,
  getSingleUser,
  deleteSingleUser,
  updateUser,
} from "../Controller/userController.js";

const router = express.Router();

router.get("/", getAllUser);

router.get("/:id", getSingleUser);

router.post("/", newUser);

router.delete("/:id", deleteSingleUser);

router.patch("/:id", updateUser);
export default router;
