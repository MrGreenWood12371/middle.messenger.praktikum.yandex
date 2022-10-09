import { ChatData } from "../../api/ChatAPI";
import ChatsController from "../../controllers/ChatsController";
import Block from "../../utils/Block";
import store, { withStore } from "../../utils/Store";
import template from "./chat-list.hbs";

export class ChatListBase extends Block {
  constructor(props: any) {
    super(props);
    this.setProps({
      onSelectChat: this._onSelectChat.bind(this),
    });
  }

  private _onSelectChat(e: Event) {
    e.stopPropagation()
    const target = e.currentTarget as HTMLAnchorElement;

    if (target.hasAttribute('data-chat-id')) {
      const chatID = Number(target.getAttribute('data-chat-id'));

      const state = store.getState();
      const currentChat = state.chat.list.find((item: ChatData) => item.id === chatID);
      const userID = state.user?.id;

      if (chatID && userID) {
        store.set('chat.selectedChat.info', currentChat);
        ChatsController.refetch()
        this.setProps({
          messages: store.getState().messages[chatID]
        })
      }
    }

  }

  render() {
    return this.compile(template, {
      ...this.props,
      children: this.children,
      onSelectChat: this.props.onSelectChat,
    });
  }
}

const withSelectedChatMessages = withStore(state => {
  return {
    list: (state.chat || {})['list'] || [],
  };
});

export const ChatList = withSelectedChatMessages(ChatListBase);
