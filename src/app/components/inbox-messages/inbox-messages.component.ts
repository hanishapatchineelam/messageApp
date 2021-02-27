import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages/messages.service';

@Component({
  selector: 'app-inbox-messages',
  templateUrl: './inbox-messages.component.html',
  styleUrls: ['./inbox-messages.component.scss']
})
export class InboxMessagesComponent implements OnInit {
  public listOfMessages;
  constructor(private messageService: MessagesService) { }

  ngOnInit() {
    this.fetchInboxMessages();
  }

  public fetchInboxMessages() {
    this.messageService.getMessages('').subscribe((data) => {
      this.listOfMessages = data;
    });
  }
  
  public deleteMessage(id: number) {
    this.messageService.deleteMessage(id).subscribe(() => {
      this.listOfMessages = this.listOfMessages.filter((data) => {
        return data.id !== id;
      });
    });
  }
}
