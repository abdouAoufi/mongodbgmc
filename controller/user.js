import User from "../model/user.js";
import bcrypt from "bcryptjs";

export const createUser = (req, res, next) => {
    const userInfo = req.body;
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

export const loginUser = (req, res, next) => {
    const userInfo = req.body;
    const email = userInfo.email;
    const password = userInfo.password;
    User.findOne({ email: email })
        .exec()
        .then((user) => {
            if (user) {
                bcrypt.compare(password, user.password).then((isReal) => {
                    if (isReal) {
                        res.send({ message: "Welcome back" });
                    } else {
                        res.send({ message: "Incorrect password" });
                    }
                });
            } else {
                res.send({ message: "Please register" });
            }
        })
        .catch(() => console.log("Some thing went wrong!"));
};