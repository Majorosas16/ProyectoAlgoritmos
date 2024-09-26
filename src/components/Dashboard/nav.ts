class Nav extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `

            <link rel="stylesheet" href="/src/components/Dashboard/nav.css">

            <nav>
               <ul>
               <img src="" alt="MovieMoodIcon">
               <li><a href="#">Favorites</a></li>
               <li><a href="#">Search</a></li>
               <li><a href="#">Create</a></li>
              </ul>

              <img src="" alt="User">
            </nav>

            `;
        }
    }
}

customElements.define('nav-component', Nav);
export default Nav;