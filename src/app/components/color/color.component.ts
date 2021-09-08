import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  defaultColor = 'black';
  bgc = '';
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((mesRoutesParams) => {
      this.defaultColor = mesRoutesParams.favoriteColor;
      this.changeColor(this.defaultColor);
    });
    this.activatedRoute.queryParams.subscribe((mesRoutesQParams) => {
      console.log(mesRoutesQParams);
    });
  }
  changeColor(color: string): void {
    this.bgc = color;
  }
}
