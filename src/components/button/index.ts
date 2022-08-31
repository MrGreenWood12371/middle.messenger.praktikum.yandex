import Block from "../../utils/Block";
import template from "./button.hbs";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: string;
  mod?: string;
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super({
      label: props.label,
      type: props.type,
      mod: props.mod,
      events: {
        click: props.onClick,
      },
    });
  }

  render() {
    return this.compile(template, {
      label: this.props.label,
      type: this.props.type,
      mod: this.props.mod,
    });
  }
}
