import Block from "../../utils/Block";
import template from "./chat-item.hbs";

export class ChatItem extends Block {
    constructor(props: any) {
        super({
            ...props
        });
    }

    render() {
        return  this.compile(template, {
            children: this.children,
            avatarSrc: this.props.avatarSrc,
            name: this.props.name,
            author: this.props.author,
            value: this.props.value,
            chatDate: this.props.chatDate,
            count: this.props.count,
        })
    }
}