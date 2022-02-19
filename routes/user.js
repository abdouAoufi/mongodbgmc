import { Router } from "express";
import { createUser } from "../controller/user.js";

const userRouter = Router();

userRouter.post("/register", createUser);

export default userRouter;