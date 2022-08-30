import { Button } from './components/button';
import { Link } from './components/link/link';
import { HomePage } from  './pages/home/index';
import { registerComponent } from './utils/registerComponent';
import { LabeledInput } from './components/labeledInput';
import { Input } from './components/input'
import { SearchInput } from './components/search-input';
import { ChatItem } from './components/chat-item';
import { Avatar } from './components/avatar'
import { Error } from './components/error';
import { FileModal } from './components/modal/file-modal';
import { UserModal } from './components/modal/user-modal';

registerComponent('Input', Input as any);
registerComponent('Button', Button as any);
registerComponent('Link', Link as any);
registerComponent('LabeledInput', LabeledInput as any);
registerComponent('SearchInput', SearchInput as any);
registerComponent('ChatItem', ChatItem as any);
registerComponent('Avatar', Avatar as any);
registerComponent('Error', Error as any);
registerComponent('FileModal', FileModal as any);
registerComponent('UserModal', UserModal as any);

window.addEventListener('DOMContentLoaded', () => {
    const root =  document.querySelector('#root');
    
    const homePage = new HomePage();

    root.append(homePage.getContent());
})