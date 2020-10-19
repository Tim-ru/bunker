class Server {

    token;

    async getData(method, data = {}) {
        let url = `api/?method=${method}`;
        if (this.token) {
            url += `&token=${this.token}`;
        }
        const arr = [];
        for (let key in data) {
            arr.push(`${key}=${data[key]}`);
        }
        if (arr.length) {
            url += `&${arr.join('&')}`;
        }
        const request = await fetch(url);
        const answer = await request.json();
        return (answer && answer.result == 'ok') ? answer.data : false;
    }

    async login(data) {
        const result = await this.getData('login', data);
        if (result && result.token) {
            this.token = result.token;
        }
        return result;
    }

    logout() {
        return this.getData('logout');
    }
}