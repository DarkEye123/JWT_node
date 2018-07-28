import {User} from "../types/user";

const INMEM_DB = [
    new User(1,"admin","admin"),
    new User(2,"member","member"),
    new User(3,"guest","guest")
];

export function AuthUser(username, password) {
    let user = INMEM_DB.find((user) => user.username == username && user.password == password);
    if (!user) {
        throw new Error("Not Found");
    }
    return user;
}