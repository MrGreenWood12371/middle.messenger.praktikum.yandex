import Block from "../../utils/Block";
import template from "./file-input.hbs";

export class FileInput extends Block {
  constructor(props: {id: string}) {
    super({
      ...props,
    });
  }

  render() {
    return this.compile(template, {
      children: this.children,
      id: this.props.id,
    });
  }
}
