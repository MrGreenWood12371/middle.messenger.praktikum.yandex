import Block from "../../../utils/Block";
import template from "./file-modal.hbs";

export class FileModal extends Block {
    constructor(props: any) {
        super({
            ...props,
        });
    }

    render() {
        return this.compile(template, {
            children: this.children,
            title: this.props.title,
            titleClass: this.props.titleClass,
            errorMessage: this.props.errorMessage,
        })
    }
}