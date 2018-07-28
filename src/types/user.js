export class User {
    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }
}

function isResponseBodyValid(resp) {
    if (resp.body && resp.body.username && resp.body.password) {
        return true;
    }
    return false;
}

export function CreateUserFromResponse(resp) {
    if (isResponseBodyValid(resp)) {
        return new User(null, resp.body.username, resp.body.password);
    }
    else {
        return null;
    }
}