export function verifyUserBody(resp) {
    if (resp.body !== undefined && resp.body.username !== "" && resp.body.password !== "") {
        return;
    }
    return new Error("Unauthorized");
}
