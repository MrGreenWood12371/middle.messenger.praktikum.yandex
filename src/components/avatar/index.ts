import Block from "../../utils/Block";
import template from "./avatar.hbs";

interface AvatarProps {
  name?: string;
  imageSrc: string
  cb?: () => void
}
export class Avatar extends Block {
  constructor(props: AvatarProps) {
    super({
      ...props,
      events: {
        click: () => {
          this.props.cb && typeof this.props.cb === 'function'  && this.props.cb()
        },
      },
    });
  }

  render() {
    return this.compile(template, {
      children: this.children,
      name: this.props.name,
      imageSrc: this.props.imageSrc,
      mod: this.props.mod,
    });
  }
}
