import Block from "../../utils/Block";
import store, { withStore } from "../../utils/Store";
import template from "./messages.hbs";

export class MessagesBase extends Block {
  constructor(props: any) {
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

  if (!selectedChatId) {
    return {
      messages: [],
    };
  }

  return {
    messages: (state.messages || {})[selectedChatId] || [],
  };
});

export const Messages = withSelectedChatMessages(MessagesBase);
