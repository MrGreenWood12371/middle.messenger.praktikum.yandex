import Block from "../../../utils/Block";
import template from "./notFound.hbs";

export class NotFound extends Block {
  constructor() {
    super({});
  }

  render() {
    return this.compile(template, {
      children: this.children,
    });
  }
}
