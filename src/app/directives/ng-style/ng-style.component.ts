import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css'],
})
export class NgStyleComponent implements OnInit {
  @Input() color = 'green';
  @Input() bgc = 'yellow';
  @Input() font = 'arial';
  constructor() {}

  ngOnInit(): void {}
}
