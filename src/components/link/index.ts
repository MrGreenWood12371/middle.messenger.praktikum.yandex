import { withRouter } from "../../hocs/withRouter";
import Block from "../../utils/Block";
import template from "./link.hbs";
import Router from '../../utils/Router';

interface LinkProps {
  value: string;
  to: string;
  router: typeof Router;
  mod?: string;
  onClick?: () => void;
  events?: {
    click: () => void;
  };
}

class BaseLink extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super({
      ...props,
      events: {
        click: props.onClick ? props.onClick  : () => this.navigate(),
      },
    });
  }

  navigate() {
    this.props.router.go(this.props.to);
  }

  render() {
    return this.compile(template, {
      ...this.props,
    });
  }
}

export const Link = withRouter(BaseLink as typeof Block);
