import Block from "../../utils/Block";
import template from "./link.hbs";

interface LinkProps {
    value: string;
    href: string;
    mod?: string;
    onClick?: () => void,
}

export class Link extends Block {
    constructor(props: LinkProps) {
        super({
            value: props.value,
            href: props.href,
            mod: props.mod,
            events: {
                click: props.onClick,
            },
        })
    }

    render() {
        return this.compile(template, {
            value: this.props.value,
            href: this.props.href,
            mod: this.props.mod,
        })
    }
}