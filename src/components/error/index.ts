import Block from "../../utils/Block";
import template from "./error.hbs";

export class Error extends Block {
    constructor(props: any) {
        super({
            ...props
        });
    }

    render() {
        return  this.compile(template, {
            children: this.children,
            value: this.props.value,
            message: this.props.message,
        })
    }
}