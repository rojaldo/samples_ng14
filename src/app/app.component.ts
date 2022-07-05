import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'esto es una prueba';
  display = ''

  handleClick(value: number | string) {
    this.display += value.toString()
  }
}
