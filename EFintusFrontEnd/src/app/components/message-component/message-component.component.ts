import { MessageService } from './../../services/message-service/message.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-component',
  templateUrl: './message-component.component.html',
  styleUrls: ['./message-component.component.css']
})
export class MessageComponentComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
