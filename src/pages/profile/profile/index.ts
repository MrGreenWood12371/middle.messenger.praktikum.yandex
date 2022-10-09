import Block from "../../../utils/Block";
import template from "./profile.hbs";
import prevButtonImage from "../../../../static/nav-previous.svg";
import profileImage from "../../../../static/profile-placeholder.svg";
import { withStore } from "../../../utils/Store";
import AuthController from "../../../controllers/AuthController";
class ProfileBasePage extends Block {

  constructor() {
    super()

    this.setProps({
      onLogout: this._onLogout.bind(this),
    })
  }

  private _onLogout() {
    AuthController.logout();
  }

  init(): void {
    AuthController.fetchUser();

  }

  render() {
    return this.compile(template, {
      ...this.props,
      children: this.children,
      prevButtonImage: prevButtonImage,
      profileImage: profileImage,
      onLogout: this.props.onLogout,
      avatar: `https://ya-praktikum.tech/api/v2/resources/${this.props.avatar}`,
      display_name: this.props.display_name || '',
    });
  }
}

const withUser = withStore((state) => ({ ...state.user }))

export const ProfilePage = withUser(ProfileBasePage);
