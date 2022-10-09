import Block from "../../utils/Block";
import template from "./chat.hbs";
import avatarPlaceholder from "../../../static/avatar-placeholder.svg";
import settingsImage from "../../../static/settings.svg";
import cameraImage from "../../../static/camera.jpg";
import sendImage from "../../../static/send.svg";
import attachImage from "../../../static/attach.svg";
import ChatsController from "../../controllers/ChatsController";
import store, { withStore } from "../../utils/Store";
import Validator from "../../utils/Validator";

export class ChatBasePage extends Block {

  constructor() {
    super(
      {
        events: {
          click: () => {
            if (this.isSettingsOpen === true) {
              this.isSettingsOpen = !this.isSettingsOpen;
              this.setProps({
                isSettingsOpen: this.isSettingsOpen
              })
            }
            if (this.addUserModalIsOpen) {
              this.addUserModalIsOpen = !this.addUserModalIsOpen;
              this.setProps({
                addUserModalIsOpen: this.addUserModalIsOpen,
              })
            }
            if (this.deleteUserModalIsOpen) {
              this.deleteUserModalIsOpen = !this.deleteUserModalIsOpen;
              this.setProps({
                deleteUserModalIsOpen: this.deleteUserModalIsOpen,
              })
            }
          },
        },
      }
    );
    this.setProps({
      onCreate: this.onCreate.bind(this),
      onSendMessage: this._onSendMessage.bind(this),
      onCreateButtonClick: this._onCreateButtonClick.bind(this),
      onSettingsClick: this._onSettingsClick.bind(this),
      onAddUserClick: this._onAddUserClick.bind(this),
      onDeleteUserClick: this._onDeleteUserClick.bind(this),
      onAddUser: this._onAddUser.bind(this),
      onDeleteUser: this._onDeleteUser.bind(this),
    })
  }

  private isSettingsOpen: boolean = false;
  private addUserModalIsOpen: boolean = false;
  private deleteUserModalIsOpen: boolean = false;
  private createModalIsOpen: boolean = false;

  onCreate(content: any) {
    const data = {
      title: '',
    };
    const input = content.querySelector('input')

    if (!input.value) {
      return;
    }
    data.title = input.value
    ChatsController.create(input.value)
    this.createModalIsOpen = !this.createModalIsOpen;
    this.setProps({
      createModalIsOpen: false
    })
  }

  private _onCreateButtonClick(e: Event) {
    e.stopPropagation()
    this.createModalIsOpen = !this.createModalIsOpen;
    this.setProps({
      createModalIsOpen: this.createModalIsOpen
    })
  }

  private _onSendMessage(e: Event) {
    e.preventDefault()
    const input = this.getContent().querySelector('.chat-field__message-input') as HTMLInputElement;
    const value = input.value;
    if  (!value) {
      return;
    }
    ChatsController.sendMessage(value, store.getState().chat.selectedChat.info.id)
  }

  private _onSettingsClick(e: Event) {
    e.stopPropagation()
    this.isSettingsOpen = !this.isSettingsOpen;
    this.setProps({
      isSettingsOpen: this.isSettingsOpen
    })
  }

  private _onAddUserClick(e: Event) {
    e.stopPropagation()
    this.addUserModalIsOpen = !this.addUserModalIsOpen;
    this.isSettingsOpen = !this.isSettingsOpen;
    this.setProps({
      addUserModalIsOpen: this.addUserModalIsOpen,
      isSettingsOpen: this.isSettingsOpen,
    })
  }

  private _onDeleteUserClick(e: Event) {
    e.stopPropagation()
    this.deleteUserModalIsOpen = !this.deleteUserModalIsOpen;
    this.isSettingsOpen = !this.isSettingsOpen;
    this.setProps({
      deleteUserModalIsOpen: this.deleteUserModalIsOpen,
      isSettingsOpen: this.isSettingsOpen,
    })
  }

  private _onAddUser(e: Event, modal: HTMLElement) {
    e.stopPropagation();
    const input: HTMLElement = modal.querySelector('.input') as HTMLElement
    const inputField: HTMLInputElement = input.querySelector('input') as HTMLInputElement

    const userName: string = inputField.value
    if (Validator.validate(input, 'required')){
      return
    }
    ChatsController.addUser(userName, store.getState().chat.selectedChat.info.id)
  }

  private _onDeleteUser(e: Event, modal: HTMLElement) {
    e.stopPropagation();
    const input: HTMLElement = modal.querySelector('.input') as HTMLElement
    const inputField: HTMLInputElement = input.querySelector('input') as HTMLInputElement

    const userName: string = inputField.value

    if (Validator.validate(input, 'required')){
      return
    }
    ChatsController.deleteUser(userName, store.getState().chat.selectedChat.info.id)
  }

  protected init(): void {
    ChatsController.get()
  }

  render() {
    return this.compile(template, {
      ...this.props,
      children: this.children,
      avatar: avatarPlaceholder,
      settingsImage: settingsImage,
      chatImage: cameraImage,
      sendImage: sendImage,
      attachImage: attachImage,
      chatItemAvatar: avatarPlaceholder,
      createChat: this.props.onCreate,
      chatTitle: this.props.selectedChat?.info.title || '',
    });
  }
}

const withChat = withStore((state) => ({ ...state.chat }))

export const ChatPage = withChat(ChatBasePage);
