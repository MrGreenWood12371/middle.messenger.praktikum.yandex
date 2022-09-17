import Block from "../../../utils/Block";
import { ModalProps } from "../types";
import template from "./file-modal.hbs";

export class FileModal extends Block {
  constructor(props: ModalProps) {
    super({
      ...props,
    });
  }

  render() {
    return this.compile(template, {
      children: this.children,
      title: this.props.title,
      titleClass: this.props.titleClass,
      errorMessage: this.props.errorMessage,
    });
  }
}
