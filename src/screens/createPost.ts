class CreatePost extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }
    render() {
        const title = this.ownerDocument.createElement('h1');
        title.innerHTML = 'Formulario para crear post'
    }
}

customElements.define('createpost-component', CreatePost);