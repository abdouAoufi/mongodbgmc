import User from "../model/user.js";

export const createUser = (req, res, next) => {
    const userInfo = req.body;
    const user = new User(userInfo);
    user
        .save()
        .then(() => {
            console.log("User created successfuly");
        })
        .catch(() => {
            console.log("Something went wrong");
        });
};