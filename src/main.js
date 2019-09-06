class App {

    constructor() {
        this._repositories = [];
        this._formElement = document.getElementById('repo-form');
    }

    registerHandlers() {
        this._formElement.onsubmit = event => this.addRepository(event);
    }


    addRepository(event) {
        
        event.preventDefault();

        this._repositories.push({
            name: 'name',
            description: 'description',
            avatar_url: 'avatar_url',
            html_url: 'html_url'
        });
        console.log(this._repositories);
    }
}

new App();
