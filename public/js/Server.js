class Server {

	constructor(callbackGetMessages){
		this.token = localStorage.getItem('token');
		this.interval;
		this.callbackGetMessages = callbackGetMessages || function() {};
		this.chatHash='asdad';
		if (this.token) {
			this.interval = setInterval(() => this.getMessages(),500);
		}
	}

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
            localStorage.setItem('token', result.token);
            localStorage.setItem('name', result.name);
            this.token = result.token;
        }
        return result;
    }

    logout() {
		clearInterval(this.interval);
		localStorage.setItem('token', '');
        return this.getData('logout');
    }

    async registration(data) {
        const result = await this.getData('registration', data);
        if (result && result.token) {
            this.token = result.token;
        }
        return result;
    }
	
	async getMessages() {
		const result = await this.getData('getMessages', { hash: this.chatHash });
		if (result) {
			this.chatHash = result.hash;
			this.callbackGetMessages(result.messages);
		}
	}
	
	sendMessage(message){
		this.getData('sendMessage', { message });
	}
}