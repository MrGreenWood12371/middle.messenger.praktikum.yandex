import Block from "../../../utils/Block";
import template from "./edit-data.hbs";
import prevButtonImage from "../../../../static/nav-previous.svg";
import profileImage from "../../../../static/profile-placeholder.svg";
import Validator from "../../../utils/Validator";
import { withStore } from "../../../utils/Store";
import AuthController from "../../../controllers/AuthController";
import UserController from "../../../controllers/UserController";
import { ChangeProfileData } from "../../../api/UserAPI";

export class EditDataBasePage extends Block {
  constructor() {
    super({});
    this.setProps({
      onClick: this._onChangeData.bind(this),
      openModal: this._onAvatarChangeClick.bind(this),
    });
  }

  private _isModalOpen: boolean = false;

  protected init(): void {
    AuthController.fetchUser();
  }

  _onChangeData(e: Event) {
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

    UserController.changeProfile(data as ChangeProfileData);
  }

  private _onAvatarChangeClick() {
    this._isModalOpen = !this._isModalOpen;
    this.setProps({
      isModalOpen: this._isModalOpen,
    })
  }

  render() {
    return this.compile(template, {
      ...this.props,
      children: this.children,
      prevButtonImage: prevButtonImage,
      profileImage: profileImage,
      avatar: `https://ya-praktikum.tech/api/v2/resources/${this.props.avatar}`,
    });
  }
}

const withUser = withStore((state) => ({ ...state.user }))

export const EditData = withUser(EditDataBasePage);
