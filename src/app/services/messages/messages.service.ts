import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import APIConfig from 'src/app/constants/config';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  constructor(private http: HttpClient) {}

  getMessages(type: string) {
    let url =
      type === 'sent' ? `${APIConfig.MESSAGES}/sent/` : APIConfig.MESSAGES;
    return this.http.get(url);
  }

  deleteMessage(id: number) {
    let url = `${APIConfig.MESSAGES}/${id}/`;
    return this.http.delete(url);
  }

  composeMesage(title: string, body: string) {
    const composeMessage = { title, body, receiver:'tomk'};
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers };
    return this.http
      .post(`${APIConfig.MESSAGES}/`, composeMessage, options)
  }
}
