import Block from "../../../utils/Block";
import Validator from "../../../utils/Validator";
import template from "./login.hbs";

export class Login extends Block {
  constructor() {
    super();
    this.setProps({
      onClick: this._onLogin.bind(this),
    });
  }

  _onLogin(e: Event) {
    e.preventDefault();
    const form = this.getContent().querySelector("form");

    if (!form) {
      return;
    }

    const inputGroups = form.querySelectorAll(".input");
    const fields = form.querySelectorAll(".input__field");
    const data: Record<string, unknown> = {};

    inputGroups.forEach((el: HTMLElement) => {
      const validationType = el.getAttribute("data-validation");

      Validator.validate(el, validationType as string);
    });

    Array.from(fields).forEach((el: HTMLInputElement) => {
      data[el.name] = el.value;
    });
    console.log(data);
  }

  render() {
    return this.compile(template, {
      children: this.children,
      onClick: this.props.onClick,
    });
  }
}
