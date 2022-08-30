import Block from "../../utils/Block";
import Validator from "../../utils/Validator";
import template from "./input.hbs";

export class Input extends Block {
    constructor(props: any) {
        super({
            ...props,
            events: {
                blur: props.onBlur,
                focus: props.onFocus,
            }
        })
    }

    render() {
        return this.compile(template, {
            class: this.props.class,
            type: this.props.type,
            id: this.props.id,
            name: this.props.name,
            placeholder: this.props.placeholder,
            defaultValue: this.props.defaultValue,
        })
    }
}