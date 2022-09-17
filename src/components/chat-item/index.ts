import Block from "../../utils/Block";
import template from "./chat-item.hbs";

interface ChatItemProps {
  avatarSrc: string;
  name: string;
  author: string;
  value: string;
  chatDate: string | Date;
  count: number | string;
}
export class ChatItem extends Block {
  constructor(props: ChatItemProps) {
    super({
      ...props,
    });
  }

  render() {
    return this.compile(template, {
      children: this.children,
      avatarSrc: this.props.avatarSrc,
      name: this.props.name,
      author: this.props.author,
      value: this.props.value,
      chatDate: this.props.chatDate,
      count: this.props.count,
    });
  }
}
