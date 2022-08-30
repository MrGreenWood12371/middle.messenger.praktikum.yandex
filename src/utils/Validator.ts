const Validator = {
    phone(value: string, message?: string): [boolean, string] {
        return [/\+?[0-9]{10,15}/.test(value), message || 'Ошибка в номере'];
    },
    password(value: string, message?: string): [boolean, string] {
        return [/(?=.*[0-9])(?=.*[A-Z])[A-Za-z0-9]{8,40}/g.test(value), message || 'Ошибка в пароле'];
    },
    email(value: string, message?: string): [boolean, string] {
        return [
            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z](?:[a-z-]*[a-z])?\.)+[a-z](?:[a-z-]*[a-z])?$/i.test(value),
            message || 'Некорректный email!']
    },
    login(value: string, message?: string): [boolean, string] {
        return [true, message || 'Неправильный логин!']
    },
    name(value: string, message?: string) {
        return [/[A-ZА-Я][a-zа-я\-]*/.test(value), message || 'Некоррекное имя/фамилия']
    },

    validate (value: string, type: string, message?: string): [boolean, string] {
        switch (type) {
            case 'phone':
                return this.phone(value, message)
            case 'password':
                return this.password(value, message)
            case 'email':
                return this.email(value, message)
            case 'login':
                return this.login(value, message)
            case 'name':
                return this.name(value, message)
            case 'required':
                return [!!value.length, 'Поле обязательно для заполнения!']
        }
    }
}

export default Validator;