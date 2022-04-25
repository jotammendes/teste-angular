import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  canShow: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showMessage(): void {
    this.canShow = !this.canShow;
  }

}
