import { Component, OnInit } from '@angular/core';

import { RequestService } from './services/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-adapter';
  constructor(private readonly requestService: RequestService) {}
  ngOnInit(): void {
    this.requestService.loadAll().subscribe();
  }
}
