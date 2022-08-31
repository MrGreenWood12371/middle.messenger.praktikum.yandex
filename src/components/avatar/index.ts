import Block from "../../utils/Block";
import template from "./avatar.hbs";

interface AvatarProps {
  name?: string;
  imageSrc: string
}
export class Avatar extends Block {
  constructor(props: AvatarProps) {
    super({
      ...props,
    });
  }

  render() {
    return this.compile(template, {
      children: this.children,
      name: this.props.name,
      imageSrc: this.props.imageSrc,
    });
  }
}
