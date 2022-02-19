import { Router } from "express";
import { createUser, loginUser } from "../controller/user.js";

const userRouter = Router();

userRouter.post("/signup", createUser);
userRouter.post("/login", loginUser)

export default userRouter;