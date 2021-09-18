import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatListMessageComponent } from './chat-list-message.component';

describe('ChatListMessageComponent', () => {
  let component: ChatListMessageComponent;
  let fixture: ComponentFixture<ChatListMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatListMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatListMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
