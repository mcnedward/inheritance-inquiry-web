import { Component } from '@angular/core';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Inheritance Inquiry';
  copyrightDate: number = new Date().getFullYear();
}
