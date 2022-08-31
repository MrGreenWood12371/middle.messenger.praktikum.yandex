import Block from "../../utils/Block";
import template from "./chat.hbs";
import avatarPlaceholder from "../../../static/avatar-placeholder.svg";
import settingsImage from "../../../static/settings.svg";
import cameraImage from "../../../static/camera.jpg";
import sendImage from "../../../static/send.svg";
import attachImage from "../../../static/attach.svg";

export class Chat extends Block {
  constructor() {
    super();
  }

  render() {
    return this.compile(template, {
      children: this.children,
      avatar: avatarPlaceholder,
      settingsImage: settingsImage,
      chatImage: cameraImage,
      sendImage: sendImage,
      attachImage: attachImage,
      chatItemAvatar: avatarPlaceholder,
    });
  }
}
