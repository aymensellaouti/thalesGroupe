import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-example',
  templateUrl: './binding-example.component.html',
  styleUrls: ['./binding-example.component.css']
})
export class BindingExampleComponent implements OnInit {
  isHidden = false;
  message = '';
  constructor() { }
  ngOnInit(): void {
  }
  hideShow(): void {
    this.isHidden = !this.isHidden;
  }
  changeMessage(newMessage: string): void {
    this.message = newMessage;
  }

}
