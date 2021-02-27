import { Component, OnChanges, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages/messages.service';

@Component({
  selector: 'app-sent-messages',
  templateUrl: './sent-messages.component.html',
  styleUrls: ['./sent-messages.component.scss'],
})
export class SentMessagesComponent implements OnInit {
  public listOfMessages;
  constructor(private messageService: MessagesService) {}

  ngOnInit(): void {
    this.fetchSentMessages();
  }

  public fetchSentMessages() {
    this.messageService.getMessages('sent').subscribe((data) => {
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
