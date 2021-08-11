import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() bgColor: undefined | string;
  @Input() text: undefined | string;

  constructor() { }

  ngOnInit(): void {
  }
}