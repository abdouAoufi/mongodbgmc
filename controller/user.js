import User from "../model/user.js";

export const createUser = (req, res, next) => {
    const userInfo = {
        name: "Dyaa",
        email: "Dyaa@gmail.com",
        age: 24,
        password: "12345678",
    };
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