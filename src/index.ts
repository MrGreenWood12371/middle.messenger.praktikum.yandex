import { Button } from "./components/button";
import { Link } from "./components/link";
import { registerComponent } from "./utils/registerComponent";
import { LabeledInput } from "./components/labeledInput";
import { Input } from "./components/input";
import { SearchInput } from "./components/search-input";
import { ChatItem } from "./components/chat-item";
import { Avatar } from "./components/avatar";
import { Error } from "./components/error";
import { FileModal } from "./components/modal/file-modal";
import { UserModal } from "./components/modal/user-modal";
import { FileInput } from "./components/file-input";
import Router from "./utils/Router";
import { Login } from "./pages/auth/login";
import { Register } from "./pages/auth/register";
import { ProfilePage } from "./pages/profile/profile";
import AuthController from "./controllers/AuthController";
import { ErrorModal } from "./components/modal/error-modal";
import { EditData } from "./pages/profile/edit-data";
import { EditPassword } from "./pages/profile/edit-password";
import { ChatPage } from "./pages/chat";
import { Messages } from "./components/messages";
import { ChatList } from "./components/chat-list";

registerComponent("Input", Input as any);
registerComponent("Button", Button as any);
registerComponent("Link", Link as any);
registerComponent("LabeledInput", LabeledInput as any);
registerComponent("SearchInput", SearchInput as any);
registerComponent("ChatItem", ChatItem as any);
registerComponent("Avatar", Avatar as any);
registerComponent("Error", Error as any);
registerComponent("FileModal", FileModal as any);
registerComponent("UserModal", UserModal as any);
registerComponent("ErrorModal", ErrorModal as any);
registerComponent("FileInput", FileInput as any);
registerComponent("Messages", Messages as any);
registerComponent("ChatList", ChatList as any);

enum Routes {
  Index = '/',
  Register = '/register',
  Profile = '/profile',
  EditData = '/profile/editData',
  EditPassword = '/profile/editPassword',
  Chats = '/chats',
}

window.addEventListener("DOMContentLoaded", async () => {
  Router
  .use(Routes.Index, Login)
  .use(Routes.Register, Register)
  .use(Routes.Profile, ProfilePage)
  .use(Routes.EditData, EditData)
  .use(Routes.EditPassword, EditPassword)
  .use(Routes.Chats, ChatPage)

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Index:
    case Routes.Register:
      isProtectedRoute = false;
      break;
  }

  try {
    await AuthController.fetchUser();

    Router.start();

    if (!isProtectedRoute) {
      Router.go(Routes.Profile)
    }
  } catch (e) {
    Router.start();

    if (isProtectedRoute) {
      Router.go(Routes.Index);
    }
  }
});
