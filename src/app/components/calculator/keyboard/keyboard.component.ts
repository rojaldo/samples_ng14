import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  @Output() onButtonPressed = new EventEmitter<number | string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(value: number | string): void {
    this.onButtonPressed.emit(value);
  }

}
