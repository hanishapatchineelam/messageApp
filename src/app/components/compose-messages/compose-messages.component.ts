import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages/messages.service';

@Component({
  selector: 'app-compose-messages',
  templateUrl: './compose-messages.component.html',
  styleUrls: ['./compose-messages.component.scss'],
})
export class ComposeMessagesComponent {
  composeMessageForm = this.formBuilder.group({
    title: '',
    body: '',
  });
  public formError = false;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessagesService,
    private router: Router
  ) {}

  onSubmit() {
    const { title, body } = this.composeMessageForm.value;
    if (title && body) {
      this.messageService
        .composeMesage(title, body)
        .subscribe((response: any) => {
          if (response.data === 'success') {
            this.formError = false;
            this.composeMessageForm.reset();
            this.router.navigateByUrl('/dashboard');
          }
        });
    } else {
      this.formError = true;
    }
  }
}
