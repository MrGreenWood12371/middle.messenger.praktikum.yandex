import Block from "../../utils/Block";
import template from "./chat-item.hbs";
import avatarPlaceholder from "../../../static/avatar-placeholder.svg";
import store from "../../utils/Store";
import { formatDate } from "../../utils/helpers";
interface ChatItemProps {
  avatarSrc: string;
  name: string;
  author: string;
  value: string;
  chatDate: string | Date;
  count: number | string;
  onClick?: () => void;
}
export class ChatItem extends Block {

  constructor(props: ChatItemProps) {
    super({
      ...props,
      events: {
        click: props.onClick,
      },
    })
    this.setProps({
      isSelected: store.getState().chat.selectedChat?.info.id === this.props.id
    })
  }

  render() {
    return this.compile(template, {
      children: this.children,
      avatarSrc: this.props.avatarSrc || avatarPlaceholder,
      name: this.props.name,
      author: this.props.author,
      value: this.props.value,
      chatDate: this.props.chatDate ? formatDate(new Date(this.props.chatDate as string)) : '',
      count: this.props.count,
      id: this.props.id,
      isSelected: this.props.isSelected,
    });
  }
}
