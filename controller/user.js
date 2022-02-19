import User from "../model/user.js";
import bcrypt from "bcryptjs";

export const createUser = (req, res, next) => {
    const userInfo = req.body;
    console.log(userInfo.password);
    bcrypt
        .hash(userInfo.password, 12)
        .then((hasehPasswrd) => {
            userInfo.password = hasehPasswrd;
            const user = new User(userInfo);
            user
                .save()
                .then(() => {
                    console.log("User created successfuly");
                })
                .catch(() => {
                    console.log("Something went wrong");
                });
        })
        .catch((err) => console.log("ERRR", err));
};