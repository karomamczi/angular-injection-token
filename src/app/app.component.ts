import { MyStorageService } from './core/my-storage.service';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'injection';

  constructor(private myStorageService: MyStorageService) {}

  ngOnInit(): void {
    this.myStorageService.saveQuote();
  }
}
