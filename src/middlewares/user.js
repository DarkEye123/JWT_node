export function verifyUserBody(req) {
    let properties = [];
    if (!req.body) {
        throw new Error("username and password are missing");
    }
    if (!req.body.username) {
        properties.push("username");
    }
    if (!req.body.password) {
        properties.push("password");
    }
    if (properties.length > 0) {
        if (properties.length > 1) {
            let msg = properties.join(" and ");
            throw new Error(msg + " are missing or are empty");
        }
        throw new Error(properties[0] + " is missing or is empty");
    }
}
