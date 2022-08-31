import Block from "../../utils/Block";
import template from "./search-input.hbs";

export class SearchInput extends Block {
  constructor() {
    super();
  }

  render() {
    return this.compile(template, {});
  }
}
