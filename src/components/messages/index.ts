import Block from "../../utils/Block";
import { withStore } from "../../utils/Store";
import template from "./messages.hbs";

interface IMessagesProps {
  chat_id: string;
  content: string;
  file: string | null;
  id: number;
  is_read: boolean;
  not_mine: boolean;
  time: string | Date;
  type: string;
  user_id: number;
}[]
export class MessagesBase extends Block {
  constructor(props: IMessagesProps) {
    super(props);
  }

  render() {
    return this.compile(template, {
      ...this.props
    });
  }
}

const withSelectedChatMessages = withStore(state => {

  const selectedChatId = state.chat.selectedChat.info.id;

  return {
    messages: (state.messages || {})[selectedChatId] || [],
  };
});

export const Messages = withSelectedChatMessages(MessagesBase as typeof Block);
