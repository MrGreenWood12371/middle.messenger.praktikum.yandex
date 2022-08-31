import Block from "../../utils/Block";
import template from "./input.hbs";

interface InputProps {
  type?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  defaultValue?: string;
  onFocus: () => void;
  onBlur: () => void;
}
export class Input extends Block {
  constructor(props: InputProps) {
    super({
      ...props,
      events: {
        blur: props.onBlur,
        focus: props.onFocus,
      },
    });
  }

  render() {
    return this.compile(template, {
      class: this.props.class,
      type: this.props.type,
      id: this.props.id,
      name: this.props.name,
      placeholder: this.props.placeholder,
      defaultValue: this.props.defaultValue,
    });
  }
}
