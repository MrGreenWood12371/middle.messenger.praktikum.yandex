import UserController from "../../../controllers/UserController";
import Block from "../../../utils/Block";
import { ModalProps } from "../types";
import template from "./file-modal.hbs";

export class FileModal extends Block {
  constructor(props: ModalProps) {
    super({
      ...props,
    });
    this.setProps({
      onClick: this.onClick.bind(this)
    })
  }

  onClick(e: Event) {
    e.preventDefault();
    const form: HTMLFormElement | null = this.getContent().querySelector('form');
    if (!form) {
      return;
    }
    const formData = new FormData(form)
    UserController.uploadAvatar(formData)
  }

  render() {
    return this.compile(template, {
      ...this.props,
      children: this.children,
    });
  }
}
