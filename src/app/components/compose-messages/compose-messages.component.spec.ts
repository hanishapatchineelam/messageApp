import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeMessagesComponent } from './compose-messages.component';

describe('ComposeMessagesComponent', () => {
  let component: ComposeMessagesComponent;
  let fixture: ComponentFixture<ComposeMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposeMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
