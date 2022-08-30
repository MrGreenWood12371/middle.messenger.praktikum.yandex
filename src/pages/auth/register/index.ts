import Block from "../../../utils/Block";
import template from "./register.hbs";

export class Register extends Block {
    constructor() {
        super();
        this.setProps({
            onClick: this._onRegister.bind(this)
        });
    }

    _onRegister(e: Event) {
        e.preventDefault();
        const form = this.getContent().querySelector('form');

        const fields = form.querySelectorAll('.input__field');
        const data: Record<string, unknown> = {};
        Array.from(fields).forEach((el: HTMLInputElement) => {
            data[el.name] = el.value;
        })

        console.log(data);
    }

    render() {
        return this.compile(template, {
            children: this.children,
            onClick: this.props.onClick
        })
    }
}