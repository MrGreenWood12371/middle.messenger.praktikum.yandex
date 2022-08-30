import Block from '../../utils/Block';
import template from './home.hbs';
import { Login } from '../auth/login';
import { Register } from '../auth/register';
import { Chat } from '../chat';
import { Profile } from '../profile/profile';
import { EditPassword } from '../profile/edit-password';
import { EditData } from '../profile/edit-data';
import { ServerError } from '../error/serverError';
import { NotFound } from '../error/notFound';

export class HomePage extends Block {
    constructor() {
        super();
    }
    private root = document.querySelector('#root');

    render() {
        return this.compile(template, {
            children: this.children,
            goToLogin: (e) => {
                e.preventDefault()
                this.root.innerHTML = '';
                const loginPage = new Login();

                this.root.append(loginPage.getContent());
            },
            goToRegister: (e) => {
                e.preventDefault()
                this.root.innerHTML = '';
                const registerPage = new Register();

                this.root.append(registerPage.getContent());
            },
            goToChat: (e) => {
                e.preventDefault()
                this.root.innerHTML = '';
                const chatPage = new Chat();

                this.root.append(chatPage.getContent());
            },
            goToProfile: (e) => {
                e.preventDefault()
                this.root.innerHTML = '';
                const profilePage = new Profile();
                

                this.root.append(profilePage.getContent());
            },
            goToEditPassword: (e) => {
                e.preventDefault()
                this.root.innerHTML = '';
                const editPasswordPage = new EditPassword();
                

                this.root.append(editPasswordPage.getContent());
            },
            goToEditProfile: (e) => {
                e.preventDefault()
                this.root.innerHTML = '';
                const editDataPage = new EditData();
                

                this.root.append(editDataPage.getContent());
            },
            goToServerError: (e) => {
                e.preventDefault()
                this.root.innerHTML = '';
                const errorPage = new ServerError();
                

                this.root.append(errorPage.getContent());
            },
            goToNotFoundError: (e) => {
                e.preventDefault()
                this.root.innerHTML = '';
                const errorPage = new NotFound();
                

                this.root.append(errorPage.getContent());
            },
        })
    }
}