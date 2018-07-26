export class User {
    constructor(resp) {
        this.username = resp.body.username;
        this.password = resp.body.password;
    }
}