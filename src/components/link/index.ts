import { withRouter } from "../../hocs/withRouter";
import Block from "../../utils/Block";
import template from "./link.hbs";

interface LinkProps {
  value: string;
  to: string;
  mod?: string;
  onClick?: () => void;
}

class BaseLink extends Block {
  constructor(props: LinkProps) {
    super({
      ...props,
      events: {
        click: props.onClick ? props.onClick  : () => this.navigate(),
      },
    });
  }

  navigate() {
    if (!this.props.router){
      return
    }
    this.props.router.go(this.props.to);
  }

  render() {
    return this.compile(template, {
      ...this.props,
    });
  }
}

export const Link = withRouter(BaseLink);
