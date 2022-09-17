import Block from "../../utils/Block";
import template from "./error.hbs";

interface ErrorProps {
  value: string | number;
  message: string;
}
export class Error extends Block {
  constructor(props: ErrorProps) {
    super({
      ...props,
    });
  }

  render() {
    return this.compile(template, {
      children: this.children,
      value: this.props.value,
      message: this.props.message,
    });
  }
}
