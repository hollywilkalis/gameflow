import { Component, OnInit, Input, Output } from '@angular/core';

import { Session } from '../app.component';

@Component({
  selector: 'app-edit-session',
  templateUrl: './edit-session.component.html',
  styleUrls: ['./edit-session.component.css']
})
export class EditSessionComponent implements OnInit {

  @Input() childSessions: Session[];
  @Input() childDisplay: boolean;
  @Input() filter: number;

  selectedSession: Session = null;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.childDisplay = !this.childDisplay;
  }

  
}
