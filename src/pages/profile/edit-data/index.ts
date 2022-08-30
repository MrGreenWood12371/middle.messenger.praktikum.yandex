import Block from "../../../utils/Block";
import template from "./edit-data.hbs";
import prevButtonImage from "../../../../static/nav-previous.svg";
import profileImage from "../../../../static/profile-placeholder.svg";

export class EditData extends Block {
    constructor() {
        super();
    }

    render() {
        return this.compile(template, {
            children: this.children,
            prevButtonImage: prevButtonImage,
            profileImage: profileImage,
        })
    }
}