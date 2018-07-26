export function verifyUserBody(resp) {
    if (resp.body.username !== "" && resp.body.password !== "") {
        return;
    }
    return new Error("Unauthorized");
}
