import HTTPTransport from "../utils/HTTPTransport";
import { User } from "./AuthAPI";
export interface ChatData {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message: {
    user: User;
    time: string;
    content: string;
  };
}

export class ChatAPI {
  protected http: HTTPTransport;

  constructor() {
    this.http = new HTTPTransport('/chats');
  }

  public getChat(): Promise<ChatData> {
    return this.http.get("/");
  }

  public create(title: string): Promise<{ id: string }> {
    return this.http.post("/", { title });
  }

  public deleteUser(userId: number[], chatId: number): Promise<unknown> {
    return this.http.delete("/users", {
      users: userId,
      chatId: chatId
    });
  }

  public getToken(id: number): Promise<{
    token: string
  }[]> {
    return this.http.post(`/token/${id}`, {});
  }

  public addUser(userId: number[], chatId: number) {
    return this.http.put('/users', {
      users: userId,
      chatId: chatId
    });
  }
}

export default new ChatAPI();
