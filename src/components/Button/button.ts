export enum BtnAttribute { // se puede tipar
    "color" = "color",
    "label" = "label",
    "textcolor" = "textcolor",
}

class Button extends HTMLElement {
    color?: string;
    label?: string;
    textcolor?: string;

    static get observedAttributes(){
        return Object.keys(BtnAttribute); //  return ["color","label","textcolor"]
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
        this.updateStyle();
    }

    attributeChangedCallback(propName: string, oldValue: string | undefined, newValue: string | undefined) {
        if (oldValue !== newValue) {
            switch (propName) {
                case BtnAttribute.color && BtnAttribute.textcolor:
                    this.updateStyle();
                    break;

                case BtnAttribute.label:
                    this.updateLabel();
                    break;
            }
        }
    }

            // if (oldValue !== newValue) {
        // // Comprueba si realmente cambió el valor
        // if (name === this.color) {
        //     this.updateStyle();
        // } else if (name === this.label) {
        //     this.updateLabel();
        // }
        // }

    updateStyle() {
        if (this.shadowRoot) {
            const button = this.shadowRoot.querySelector("button");
            const color = this.getAttribute(BtnAttribute.color) || "gray"; // Color por defecto
            const textColor = this.getAttribute(BtnAttribute.textcolor) || "gray";

            if (button) {
                button.style.backgroundColor = color;
                button.style.color = textColor;
            }
        }
    }

    updateLabel() {
        if (this.shadowRoot) {
            const button = this.shadowRoot.querySelector("button");
            const label = this.getAttribute(BtnAttribute.label) || "Text";

            if (button) {
                button.textContent = label;
            }
        }
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="../src/components/Button/button.css">
                <button>${this.getAttribute(BtnAttribute.label) || "Botón"}</button>
            `;
        }
    }
}

customElements.define('btn-component', Button);
export default Button;
