import Block from "../../utils/Block";
import Validator from "../../utils/Validator";
import template from "./labeledInput.hbs";

interface InputProps {
  containerClass?: string;
  value: string | number;
  type: string;
  id: string;
  class?: string;
  placeholder?: string;
  defaultValue?: string;
  errorMessage?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  validationType?: string;
}

export class LabeledInput extends Block {

  constructor({...props }: InputProps) {
    super({
      ...props,
    });
    this.setProps({
      onBlur: this.validateField.bind(this),
      onFocus: this.validateField.bind(this),
    });
    if (!props.validationType) {
      return;
    }

  }

  validateField() {
    const inputGroup = this.getContent();
    Validator.validate(inputGroup, this.props.validationType as string)
  }

  render() {
    return this.compile(template, {
      children: this.children,
      containerClass: this.props.containerClass,
      value: this.props.value,
      type: this.props.type,
      id: this.props.id,
      class: this.props.class,
      placeholder: this.props.placeholder,
      defaultValue: this.props.defaultValue,
      errorMessage: this.props.errorMessage,
      onBlur: this.props.onBlur,
      onFocus: this.props.onFocus,
      validationType: this.props.validationType,
    });
  }
}
