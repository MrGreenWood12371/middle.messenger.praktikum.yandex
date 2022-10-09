import Block from "../../../utils/Block";
import { ModalProps } from "../types";
import template from "./error-modal.hbs";

export class ErrorModal extends Block {
  constructor(props: ModalProps) {
    super({
      ...props,
    });
    this.setProps({
      onClose: this.setIsClose.bind(this),
      onCreate: this.onCreate.bind(this, this.props.cb)
    })
  }

  onCreate(cb: (content: any) => void) {
    cb && cb(this.getContent())
  }

  setIsClose() {
    this.hide()
  }

  render() {
    return this.compile(template, {
      children: this.children,
      title: this.props.title,
      titleClass: this.props.titleClass,
      errorMessage: this.props.errorMessage,
      onClose: this.props.onClose,
      onCreate: this.props.onCreate
    });
  }
}
