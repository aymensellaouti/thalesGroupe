import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input() out = 'red';
  @Input() in = 'yellow';
  @HostBinding('style.backgroundColor') bgc = this.out;
  @HostBinding('style.color') color = 'blue';
  constructor() {}
  ngOnInit(): void {
    this.bgc = this.in;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.bgc = this.in;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bgc = this.out;
  }
}
