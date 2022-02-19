import { Router } from "express";
import { createUser } from "../controller/user.js";

const userRouter = Router();

userRouter.post("/signup", createUser);

export default userRouter;