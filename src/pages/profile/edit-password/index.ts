import Block from "../../../utils/Block";
import template from "./edit-password.hbs";
import prevButtonImage from "../../../../static/nav-previous.svg";
import profileImage from "../../../../static/profile-placeholder.svg";
import Validator from "../../../utils/Validator";

export class EditPassword extends Block {
  constructor() {
    super();
    this.setProps({
      onClick: this._onChangePass.bind(this),
    });
  }

  _onChangePass(e: Event) {
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
      prevButtonImage: prevButtonImage,
      profileImage: profileImage,
      onClick: this.props.onClick,
    });
  }
}
