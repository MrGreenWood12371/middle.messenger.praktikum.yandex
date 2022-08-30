import Block from "../../../utils/Block";
import template from "./serverError.hbs"

export class ServerError extends Block {
    constructor() {
        super();
    }

    render() {
        return this.compile(template, {
            children: this.children,
        })
    }
}