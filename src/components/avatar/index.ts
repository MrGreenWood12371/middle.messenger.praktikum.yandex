import Block from "../../utils/Block";
import template from "./avatar.hbs";

export class Avatar extends Block {
    constructor(props: any) {
        super({
            ...props
        });
    }

    render() {
        return this.compile(template, {
            children: this.children,
            name: this.props.name,
            imageSrc: this.props.imageSrc,
        })
    }
}