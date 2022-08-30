import Block from "../../utils/Block";
import Validator from "../../utils/Validator";
import template from './labeledInput.hbs';

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
    validationType: string;
    constructor({validationType, ...props}: InputProps) {
        super({
            ...props,
        });
        this.setProps({
            onBlur: this.validateField.bind(this),
            onFocus: this.validateField.bind(this),
        })
        this.validationType = validationType
    }

    validateField(e: Event) {
        const [isValid, message] = Validator.validate(e.target.value, this.validationType);
        const inputGroup = this.getContent();
        const input = inputGroup.querySelector('input');
        const errorField = inputGroup.querySelector('.input__error-message')
                    
        if (!isValid) {
            input.classList.add('input__field_error');
            errorField.textContent = message;
            return;
        }

        input.classList.remove('input__field_error');
        errorField.textContent = '';
        return;
        
        
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
        })
    }
}