import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() out = 'red';
  @Input() in = 'yellow';
  @HostBinding('style.backgroundColor') bgc = this.out;
  @HostBinding('style.color') color = 'blue';
  constructor() {}

  @HostListener('mouseenter') onMouseEnter() {
    this.bgc = this.in;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bgc = this.out;
  }
}
