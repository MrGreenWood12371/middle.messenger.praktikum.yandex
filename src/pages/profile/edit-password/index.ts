import Block from "../../../utils/Block";
import template from "./edit-password.hbs";
import prevButtonImage from "../../../../static/nav-previous.svg";
import profileImage from "../../../../static/profile-placeholder.svg";

export class EditPassword extends Block {
    constructor() {
        super();
    }

    render(){
        return this.compile(template, {
            children: this.children,
            prevButtonImage: prevButtonImage,
            profileImage: profileImage
        })
    }
}
