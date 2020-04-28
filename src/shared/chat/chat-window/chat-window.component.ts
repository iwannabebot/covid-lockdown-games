import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat-service/chat-service.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }

}
