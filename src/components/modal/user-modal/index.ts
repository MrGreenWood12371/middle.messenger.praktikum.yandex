import Block from "../../../utils/Block";
import { ModalProps } from "../types";
import template from "./user-modal.hbs";
export class UserModal extends Block {
  constructor(props: ModalProps) {
    super({
      ...props,
      events: {
        click: (e: Event) => {
          e.stopPropagation()
        }
      }
    });
    this.setProps({
      onClick: this.onClick.bind(this)
    })
  }

  onClick(e: Event) {
    this.props.cb && this.props.cb(e, this.getContent())
  }

  render() {
    return this.compile(template, {
      ...this.props,
      children: this.children,
    });
  }
}
